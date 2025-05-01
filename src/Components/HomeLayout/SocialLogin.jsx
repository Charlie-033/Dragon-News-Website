import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='mt-5 space-y-3'>
            <button className='btn btn-outline btn-secondary w-full'><FaGoogle /> Login With Google </button>
            <button className='btn btn-outline btn-primary w-full'><FaGithub /> Login With GitHub </button>
        </div>
    );
};

export default SocialLogin;