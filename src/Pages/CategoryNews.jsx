import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();
    const data = useLoaderData();
    
    useEffect(() => {
        if(!id || !data) return;
        if(id == '0'){
            setCategoryNews(data);
            // return
        } else if(id == '1'){
            const breakingNews = data.filter(news => news.others?.is_today_pick);
            setCategoryNews(breakingNews)
        } else {
            const filteredNews = data.filter(news => news.category_id == id)
            setCategoryNews(filteredNews)
        }
    }, [data, id])
    return (
        <div>
            <h2 className='font-bold mb-5'>Dragon News Home</h2>
            <div className='flex flex-col gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;