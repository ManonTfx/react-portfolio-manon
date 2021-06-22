import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active-projets nav-active">
                    <li>Projets</li>
                </NavLink>
                <NavLink to="/a-propos" className="hover" activeClassName="nav-active-a-propos nav-active">
                    <li>A propos</li>
                </NavLink>
            </ul>
            <h1>manon <span>trefoux</span></h1>
            <NavLink className="hover" to="/contact">
                <button >Me contacter</button>
            </NavLink>
        </div>
    );
};

export default Navigation;