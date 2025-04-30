import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={logo} alt="" className=''/>
            <p className='font-medium text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-medium'><span className='text-gray-800'>{format(new Date(), 'EEEE')}, </span>{format(new Date(), "MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;