import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../../data/links.json';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div className='flex items-center'>
          <a
            href={link}
            onClick={() => {
              heading !== link.name ? setHeading(link.name) : setHeading('');
              setSubHeading('');
            }}
            className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'
          >
            {link.name}
          </a>
          <div className='about flex items-center'>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
