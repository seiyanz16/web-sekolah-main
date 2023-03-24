import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NewsCard = ({ src, date, user, title, desc, filterKey }) => {
  return (
      <div className={`relative lg:my-5 lg:mx-6 my-3 mx-2 filter-item ${filterKey}`}>
        <div className='news-card'>
          <div className='news-image'>
            <img src={src} alt='' />
          </div>
          <div className='lg:px-4 lg:pt-2 lg:pb-11 px-7 pt-7 pb-8'>
            <div className='flex flex-wrap mb-1'>
              <h5 className='text-main-color text-xs font-medium mr-auto'>{date}</h5>
              <h5 className='text-main-color text-xs font-medium '>
                {user} <FontAwesomeIcon icon={faUser} className='ml-1 text-xs' />
              </h5>
            </div>
            <h3 className='lg:text-2xl text-2xl leading-none text-dark font-semibold'>{title}</h3>
            <p className='mt-[0.1rem] text-sm leading-none text-[#666]'>{desc}</p>
          </div>
        </div>
      </div>
  );
};

export default NewsCard;
