import React, { useEffect } from 'react';

const ScrollSmooth = () => {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default ScrollSmooth;