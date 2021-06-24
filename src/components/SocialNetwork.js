import React from 'react';

const SocialNetwork = () => {

    return (
            <div className="social-network">
                <a href="https://github.com/ManonTfx" target="blank"><img src={process.env.PUBLIC_URL + '/assets/img/github-icon.png'} alt="github-manon" className="hover hvr-bob" /></a>
                <a href="https://www.linkedin.com/in/manon-tr%C3%A9foux/" target="blank"><img src={process.env.PUBLIC_URL + '/assets/img/linkedin-icon.png'} alt="linkedin-manon" className="hover hvr-bob" /></a>
            </div>
    );
};

export default SocialNetwork;