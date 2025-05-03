import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5'>
            <img src={news.image_url} alt="" className='w-full h-[400px] object-cover rounded'/>
            <h3 className='text-2xl font-semibold'>{news.title}</h3>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;