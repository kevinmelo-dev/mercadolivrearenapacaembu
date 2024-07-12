import React from 'react';
import { Area } from '@/utils/types';

interface Props {
  areas: Area[];
  onAreaClick: (area: Area) => void;
  selectedAreaId: number;
}

const Areas: React.FC<Props> = ({ areas, onAreaClick, selectedAreaId }) => {
  const areasStyle: React.CSSProperties = {
    fontSize: 'clamp(9px, 0.75vw + 0.75rem, 9px)'
  };

  const handleAreaClick = (area: Area) => {
    onAreaClick(area);
  };

  return (
    <div className="mt-5 flex justify-between" style={areasStyle}>
      <div className="w-1/2 font-pacaembuRegular">
        {areas.slice(0, 8).map((area, index) => (
          <p
            key={index}
            onClick={() => handleAreaClick(area)}
            className={`${area.id === selectedAreaId ? 'text-mainYellow' : 'text-secondaryYellow'}`}
          >
            {area.name}
          </p>
        ))}
      </div>

      <div className="w-1/2 font-pacaembuRegular">
        {areas.slice(8).map((area, index) => (
          <p
            key={index}
            onClick={() => handleAreaClick(area)}
            className={`${area.id === selectedAreaId ? 'text-mainYellow' : 'text-secondaryYellow'}`}
          >
            {area.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Areas;
