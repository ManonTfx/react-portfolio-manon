import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const WorkHome = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];

    return (
        <div className="projects-home">
                <h3>{project.techno} <span>{project.title}</span></h3>
                <p>{project.alert}</p>
                <button><a  target="_blank" className="hover" href={project.url}>voir le site</a></button>
                <div className="img-container">
                    <span>{project.infos}</span> 
                    <img className="hover" src={project.img} alt={project.title} />
                </div>
        </div>
    );
};

export default WorkHome;