import React, { useEffect, useState } from 'react';
import { Button, NewsCard } from '../components';
import NewsData from '../data/newsData.json';
import Isotope from 'isotope-layout';

const News = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('*');
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
          <h3 className='title text-light-one before:text-light-one after:bg-light-one'>News</h3>
        </div>

        <div className='flex w-full justify-center flex-wrap'>
          <div className='w-full flex items-center justify-center flex-wrap'>
            <Button text='ALL' filterKey={filterKey} setFilterKey={setFilterKey} filter="*" />
            <Button text='Prestasi' filterKey={filterKey} setFilterKey={setFilterKey} filter="prestasi" />
            <Button text='Kesiswaan' filterKey={filterKey} setFilterKey={setFilterKey} filter="kesiswaan" />
            <Button text='Hubungan Industri' filterKey={filterKey} setFilterKey={setFilterKey} filter="industri" />
          </div>
          <div className='w-full lg:my-8 my-3 filter-container'>
            {NewsData.map((newsData) => {
              return <NewsCard key={newsData.key} filterKey={newsData.key} src={newsData.src} title={newsData.title} date={newsData.date} user={newsData.user} desc={newsData.desc} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
