import React from 'react';

const AboutContent = ({ title, filterKey, content, width }) => {
  return (
    <div className={`relative lg:my-5 lg:mx-6 my-3 mx-2 filter-item ${filterKey}`}>
      <div className='text-center mb-8'>
        <h3 className={`title text-[64px] uppercase after:w-${width} text-black before:text-black after:bg-black`}>{title}</h3>
        <p className='font-medium text-2xl mt-12 leading-7'>{content}</p>
      </div>
    </div>
  );
};

export default AboutContent;
