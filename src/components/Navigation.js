import React from 'react';
import { Navlink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <Navlink to="/">
                    <li>Projets</li>
                </Navlink>
                <Navlink to="/a-propos">
                    <li>A propos</li>
                </Navlink>
            </ul>
            <h1>manon <span>trefoux</span></h1>
            <Navlink to="/contact">
                <button>Me contacter</button>
            </Navlink>
        </div>
    );
};

export default Navigation;