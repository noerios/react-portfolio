import React from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title'; 
import portfolios from '../Components/allportfolios';
import MenuItems from '../Components/MenuItems'; 
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];
console.log(allCategories);

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);


    //return category from portfolio data, return item category and assign it to the category - filter function passed as prop
    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolios-data">

                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
        
    )
}

export default PortfoliosPage