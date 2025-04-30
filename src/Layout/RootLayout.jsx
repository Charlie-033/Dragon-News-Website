import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const RootLayout = () => {
    return (
        <div className='py-8 w-11/12 mx-auto'>
            <header>
                <Header/>
                <LatestNews/>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main className='mt-12 grid grid-cols-12'>
                <aside className='col-span-3 text-center'>
                    <LeftAside/>
                </aside>
                <section className='col-span-6 text-center'>
                    <Outlet/>
                </section>
                <aside className='col-span-3 text-center'>
                    <RightAside/>
                </aside>
            </main>
        </div>
    );
};

export default RootLayout;