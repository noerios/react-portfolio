import React from 'react';

function ServicesSection({image}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                 <img src={image} alt="" />
            </div>
        </div>
    );
}

export default ServicesSection;
