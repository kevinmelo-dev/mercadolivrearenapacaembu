import React from 'react';
import { Area } from '@/utils/types';
import Image from 'next/image';

const convertNewlinesToBreaks = (text: string) => {
  return text.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));
};

interface Props {
  area: Area;
}

const Description: React.FC<Props> = ({ area }) => {
  const titleStyle = {
    fontSize: '1rem'
  };

  const mercadoLivreStyle = {
    fontSize: '1.5rem'
  };

  const descriptionStyle = {
    fontSize: '0.8rem'
  };

  return (
    <div className="mt-3 w-100 border-2 rounded-2xl border-secondaryYellow p-5">
      { area.imgName ? <Image className='mb-3' sizes='100vw' width={150} height={10} src={area.imgName} alt='Logo'/> : <p className="font-pacaembuRegular text-secondaryYellow" style={titleStyle}>{area.abbr}</p> }
      { area.mercadoLivre && <p className="font-harabara text-mainYellow" style={mercadoLivreStyle}>mercadolivre</p> }
      <p className="font-pacaembuThin text-secondaryYellow" style={descriptionStyle}>
        {convertNewlinesToBreaks(area.description)}
      </p>
    </div>
  );
};

export default Description;
