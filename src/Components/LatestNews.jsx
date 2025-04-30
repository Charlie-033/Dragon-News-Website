import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-2 my-8'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={80} gradient={true} gradientColor='var(--color-secondary)' pauseOnHover={true}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero pariatur, doloribus eligendi, asperiores eaque tempora mollitia ipsum voluptates atque sequi consectetur omnis nihil dicta voluptatibus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero pariatur, doloribus eligendi, asperiores eaque tempora mollitia ipsum voluptates atque sequi consectetur omnis nihil dicta voluptatibus!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;