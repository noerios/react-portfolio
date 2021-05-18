import React from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Title'; 
import portfolios from '../Components/allportfolios';
import MenuItems from '../Components/MenuItems'; 
import { useState } from 'react';

function PortfoliosPage() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
        
    )
}

export default PortfoliosPage