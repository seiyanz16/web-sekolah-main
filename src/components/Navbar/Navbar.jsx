import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center h-20 bg-navBackground fixed z-50 w-full'>
      <div className='mr-12 w-20'>
        <img src='images/nevtik.svg' alt='' className='' />
      </div>
      <div className='flex items-center'>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Home
        </a>
        <div className='about flex items-center'>
          <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
            About <FontAwesomeIcon icon={faCaretDown} />
          </a>
          <div className='hidden bg-light-transparent rounded-xl min-w-["200px"] mt-["0.1rem"] text-center'>
            <a href='/' className='text-light-three mx-4 hover:underline text-dark p-5 block'>Identity</a>
            <a href='/' className='text-light-three mx-4 hover:underline text-dark p-5 block'>History</a>
            <a href='/' className='text-light-three mx-4 hover:underline text-dark p-5 block'>Vision & Mission</a>
          </div>
        </div>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          News
        </a>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Student Affairs <FontAwesomeIcon icon={faCaretDown} />
        </a>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Curriculum <FontAwesomeIcon icon={faCaretDown} />
        </a>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Facilities & Infrastructure
        </a>
      </div>
      <div className='ml-12 flex relative top-1'>
        <a href='/'>
          <img src='images/socialMedia/youtube.svg' alt='' className='mx-2' />
        </a>
        <a href='/'>
          <img src='images/socialMedia/instagram.svg' alt='' className='mx-2' />
        </a>
        <a href='/'>
          <img src='images/socialMedia/github.svg' alt='' className='mx-2' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
