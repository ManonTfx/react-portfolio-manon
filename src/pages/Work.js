import React from 'react';
import { NavLink } from 'react-router-dom';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import ScrollSmooth from '../components/ScrollSmooth';
import SocialNetwork from '../components/SocialNetwork';
import WorkHome from '../components/WorkHome';

const Work = () => {
    return (
        <div className="works">
            <ScrollSmooth />
           <Mouse />
           <Navigation />
           <div className="container">
                <h2>Developpeuse <br /> Front / <br /> Creatrice de site Web </h2>
                <p>Bonjour👋 <br /> Habitant Marseille, je suis à la recherche d'une entreprise dans la région ou en remote dans le cadre de ma formation en alternance à la Wild Code School :) </p>
                    <NavLink to="/a-propos">
                        <button className="hover btn-home">Plus d'infos ...</button>
                    </NavLink>
                <SocialNetwork />
                <div className="content-arrow-home">
                    <p> Mon travail  </p>
                    <a href="#projects"><img className="arrow-home hover" src={process.env.PUBLIC_URL + '/assets/img/arrow.png'} alt="flêche bas"/></a>
                </div>
           </div>
           <div id="projects">
           <WorkHome projectNumber={0}/>
           <WorkHome projectNumber={1}/>
           <WorkHome projectNumber={2}/>
           <WorkHome projectNumber={3}/>
           </div>
        </div>
    );
};

export default Work;