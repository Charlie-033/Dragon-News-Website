import React from 'react';
import Swimming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import Playground from '../../assets/playground.png'
const QZone = () => {
    return (
        <div className='bg-base-200 py-1 pb-4 mt-5'>
            <h2 className='font-bold my-5'>QZone</h2>
            <div className='flex flex-col items-center'>
                <img src={Swimming} alt="" />
                <img src={Class} alt="" />
                <img src={Playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;