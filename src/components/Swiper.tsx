import { useState, useRef, useEffect } from 'react';
import type { TouchEvent } from 'react';
import { MdOutlineSwipeUp } from "react-icons/md";
import { Area } from '@/utils/types';

interface SwiperProps {
  items: Area[];
  onItemChange: (item: Area) => void;
}

const Swiper: React.FC<SwiperProps> = ({ items, onItemChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startY = useRef(0);
  const endY = useRef(0);
  const isTouching = useRef(false);

  useEffect(() => {
    onItemChange(items[currentIndex]);
  }, [currentIndex, items, onItemChange]);

  useEffect(() => {
    const handleTouchMove = (event: Event) => {
      if (event instanceof TouchEvent) {
        if (isTouching.current) {
          event.preventDefault();
          endY.current = event.touches[0].clientY;
        }
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    isTouching.current = true;
    startY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    endY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
    const delta = startY.current - endY.current;
    if (delta > 30) {
      setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    } else if (delta < -30) {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    }
  };

  const renderItems = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      const opacity = i === 0 ? 1 : 1 - Math.abs(i) * 0.3;
      const textSize = i === 0 ? 'text-base' : 'text-sm';
      result.push(
        <li
          key={index}
          className={`py-2 transition-all duration-300 ease-in-out transform ${textSize}`}
          style={{ opacity, translate: `translateY(${i * 2}rem)` }}
        >
          {items[index].name}
        </li>
      );
    }
    return result;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-64 overflow-hidden border border-mainYellow mt-5"
    >
      <MdOutlineSwipeUp className='absolute top-5 right-5' size={30} />
      <ul className="absolute top-1/2 transform -translate-y-1/2 w-full text-center font-pacaembuRegular text-secondaryYellow">
        {renderItems()}
      </ul>
    </div>
  );
};

export default Swiper;
