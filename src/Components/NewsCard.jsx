import { format } from 'date-fns';
import React from 'react';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { MdBookmarkBorder } from 'react-icons/md';
import { Link } from 'react-router';

const NewsCard = ({news}) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
      } = news;
    
      return (
        <div className="card bg-base-100 shadow-md ">
          <div className="flex justify-between items-center px-4 py-3 bg-base-200">
            <div className="flex items-center gap-3">
              <img
                src={author.img}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className='flex flex-col items-start'>
                <p className="font-semibold">{author.name}</p>
                <p className="text-sm text-gray-500">{format(new Date(author.published_date), "dd-MM-yyyy")}</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
            <button className='text-gray-600 hover:text-secondary cursor-pointer text-2xl'>
                <MdBookmarkBorder/>
            </button>
            <button className='text-gray-600 hover:text-secondary cursor-pointer text-xl'>
                <FaShareAlt/>
            </button>
            </div>
            
          </div>
    
          <div className="card-body">
            <h2 className="card-title text-lg font-bold text-start">{title}</h2>
            <img
              src={thumbnail_url}
              alt="News"
              className="w-full h-52 object-cover rounded"
            />
            <p className="text-sm text-gray-700 my-3">
              {details.length > 150 ? (
                <>
                  {details.slice(0, 150)}...{" "}
                  <Link to={`/news-details/${id}`} className="text-blue-500 font-medium cursor-pointer">
                    Read More
                  </Link>
                </>
              ) : (
                details
              )}
            </p>
            <div className="border-b border-gray-300 mx-1"></div>
          </div>
    
          <div className="card-actions justify-between items-center px-6 pb-4 pt-3">
            <div className="flex items-center text-orange-500 gap-1">
              {Array.from({ length: rating.number }).map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-700 ml-1">{rating.number}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaEye />
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      );
    };

export default NewsCard;