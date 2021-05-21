import React from 'react';
import Title from '../Components/Title';

import InfoSection from '../Components/InfoSection';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.png';
import strategy from '../img/strategy.png';
import react from '../img/react.png';

function AboutPage() {
    return (
        <div className="About">
            <header className="hero">
                <h1 className="hero-text">
                    <span>INFO</span> 
                </h1>
                <h1 className="hero-two-text">I am an Austin-based web developer focused on building stunning, component-based websites with React.</h1>
                <p className="h-sub-text">
                    My name is Rolando Noe Rios. I was born in San Antonio and have since circled the globe, building my perspective along the way. In Asia, I learned that design can and should surprise you. In Latin America I learned that my culture can be my strength. Berlin taught me that sleep isn't totally necessary, and Italy awakened my love for classic style and beauty.
                </p>
                
            </header>
            <Title title={'WEB DEVELOPER'} span={'WEB DEVELOPER'} />
            <InfoSection />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skills-container">
                <SkillsSection skill={'HTML'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'CSS/SCSS'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'Bootstrap'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Javascript'} progress={'40%'} width={'40%'}/>
                <SkillsSection skill={'Node js'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'React js'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'MongoDB'} progress={'35%'} width={'35%'}/>
                <SkillsSection skill={'Digital Content & Strategy'} progress={'80%'} width={'80%'}/>
            </div>

            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} 
                text={'Stylish and effective design, based on the needs of your brand.'}
                />
                <ServicesSection image={strategy} title={'Digital & Content Strategy'} 
                text={'Strategic content design with SEO optimized code.'}
                />
                <ServicesSection image={react} title={'Component Based'} 
                text={'React based components for faster processing and updates.'}
                />
            </div>
        </div>
    )
}

export default AboutPage 