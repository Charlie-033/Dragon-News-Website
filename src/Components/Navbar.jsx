import React from 'react';
import { NavLink, useParams } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='navlink flex gap-5 font-medium text-accent'>
                <NavLink to={`/category/${id}`} className={({isActive}) =>  `btn border-0 bg-base-200 text-accent ${isActive ? 'bg-secondary text-white' : ''}`}>Home</NavLink>
                <NavLink to='/about' className={({isActive}) =>  `btn border-0 bg-base-200 text-accent ${isActive ? 'bg-secondary text-white' : ''}`}>About</NavLink>
                <NavLink to='/carrer' className={({isActive}) =>  `btn border-0 bg-base-200 text-accent ${isActive ? 'bg-secondary text-white' : ''}`}>Carrer</NavLink>
            </div>
            <div className='login-btn flex  gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;