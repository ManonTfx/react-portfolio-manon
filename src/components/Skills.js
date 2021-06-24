import React from 'react';

const Skills = () => {
    return (
        <div className="skills">
            <h2>COMPETENCES</h2>
            <div className="skills-list">
                <ul>
                    <div className="title-skills">
                        <h3>Design</h3>
                        <div className="round"></div>
                    </div>
                    <li>UI Design</li>
                    <li>Ux Design</li>
                    <li>Prototypage</li>
                </ul>
                <ul>
                    <div className="title-skills">
                        <h3>Outils</h3>
                        <div className="round"></div>
                    </div>
                    <li>Visual Studio Code</li>
                    <li>Adobe CC</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                </ul>
                <ul>
                    <div className="title-skills">
                        <h3>Technologies</h3>
                        <div className="round"></div>
                    </div>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Php</li>
                    <li>Symfony</li>
                    <li>SQL</li>
                </ul>
                <ul>
                    <div className="title-skills">
                    <h3>Personnelles</h3>
                    <div className="round"></div>
                    </div>
                    <li>Curieuse</li>
                    <li>Autonome</li>
                    <li>Créative</li>
                    <li>Organisée</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;