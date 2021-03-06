import React from 'react';


function MenuItems ({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                            <div className="image-data"> 
                                <img src={item.image} alt="" />
                                <ul className="hover-items">
                                    <li>
                                        <a target="_blank" rel="noreferrer" href={item.link1}>{item.icon1}</a>
                                    </li>
                                </ul>
                            </div>
                            <h5>
                            <a target="_blank" rel="noreferrer" href={item.link2}>{item.title}</a>
                            </h5>
                            
                            <p>{item.note}</p>
                            
                        </div>
                })
            }
        </div>
    );
}

export default MenuItems;
