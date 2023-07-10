import React from 'react';
import { Circle } from 'rc-progress';


const Skillbar = ({ progress, logoUrl }) => {
  const circleOptions = {
    strokeWidth: 6,
    trailWidth: 6,
    strokeLinecap: 'round',
    trailColor: '#D9D9D9',
  };

  return (
    <div className="relative w-32 h-32">
      <Circle
        percent={progress}
        strokeColor="blue"
        {...circleOptions}
        className="absolute"
      />
      <img
        src={logoUrl}
        alt="/"
        className="w-28 h-28 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};


export default Skillbar;
