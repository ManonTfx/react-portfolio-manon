import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import WorkHome from '../components/WorkHome';

const Work = () => {
    return (
        <div className="works">
           <Mouse />
           <Navigation />
           <div className="container">
            <h2>Developpeuse <br /> Front / <br /> Creatrice de site Web </h2>
            <p>Bonjour! Habitant Marseille depuis peu, je recherche une entreprise dans laquelle m’épanouir en tant qu’integratrice web ou developpeuse front.</p>
            <div className="content-arrow-home">
            <p> Mon travail  </p>
            <img className="arrow-home hover" src={process.env.PUBLIC_URL + '/assets/img/arrow.png'} alt="flêche bas"/>
            </div>
           </div>
           <WorkHome projectNumber={0}/>
           <WorkHome projectNumber={1}/>
           <WorkHome projectNumber={2}/>
           <WorkHome projectNumber={3}/>
        </div>
    );
};

export default Work;