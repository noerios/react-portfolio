import React from 'react';

function SkillsSection({skill, progress, width }) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                

            </div>
        </div>
        
    )
}

export default SkillsSection;