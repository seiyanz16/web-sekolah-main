import React, { useEffect, useState } from 'react';
import { Button, AboutContent } from '../components';
import AboutData from '../data/aboutData.json';
import Isotope from 'isotope-layout';

const News = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('identity');
  useEffect(() => {
    setIsotope(
      new Isotope('.filter-container', {
        // filter-container: className of the parent of the isotope elements
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
    );
  }, []);
  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === '*' ? isotope.arrange({ filter: `*` }) : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  return (
    <section className='relative w-full bg-light-three overflow-hidden py-28' id='news'>
      <div className='absolute w-full h-[612px] bg-main-color top-0 left-0'></div>
      <div className='relative z-10 max-w-[92rem] px-16 mx-auto'>
        <div className='text-center mb-8'>
          <h3 className='title text-light-one before:text-light-one after:bg-light-one'>About</h3>
        </div>

        <div className='flex w-full justify-center flex-wrap'>
          <div className='w-full flex items-center justify-center flex-wrap'>
            <Button text='Identity' filterKey={filterKey} setFilterKey={setFilterKey} filter='identity' />
            <Button text='History' filterKey={filterKey} setFilterKey={setFilterKey} filter='history' />
            <Button text='Vision & Mission' filterKey={filterKey} setFilterKey={setFilterKey} filter='visionmission' />
          </div>
          <div className='relative lg:my-5 lg:mx-6 my-3 mx-2'>
            <img src='images/about/hero.svg' alt='' />
          </div>
          <div className='w-full lg:my-8 my-3 filter-container'>
            {AboutData.map((aboutData) => {
              return <AboutContent key={aboutData.key} filterKey={aboutData.key} title={aboutData.title} content={aboutData.content} width={aboutData.width} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
