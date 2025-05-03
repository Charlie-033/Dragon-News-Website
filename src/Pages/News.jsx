import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const News = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState([])
    // console.log(data, id, news)

    useEffect(()=>{
        const detailsNews = data.find(singleNews => singleNews.id == id)
        setNews(detailsNews);
    },[data, id])
    return (
        <div>
           <header className='py-5'>
           <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='text-lg font-bold pb-5'>Dragon News</h2>
                <NewsDetailsCard key={news.id} news={news}/>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default News;