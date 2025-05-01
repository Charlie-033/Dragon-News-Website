import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async() => {
            try {
                const response = await fetch("../categories.json")
                const data = await response.json();
                setCategories(data);
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategory() // Call the async function
    }, [])
    console.log(categories)
    return (
        <div>
            {
                loading && <span className="loading loading-bars loading-xs"></span>
            }
            <h2 className='font-bold'>All Category ({categories.length})</h2>
            <div className='grid grid-cols-1 gap-1 mt-5'>
                {
                    categories.map(category => 
                    <NavLink 
                    key={category.id} 
                    className={({isActive}) =>  `btn border-0 bg-base-100 text-accent ${isActive ? 'bg-base-300' : ''}`}
                    to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>
                )
                }
            </div>
        </div>
    );
};

export default Categories;