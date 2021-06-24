import React from 'react';
import ContactForm from '../components/ContactForm';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';


const Contact = () => {

    return (
        <main className="contact">
            <Mouse />
            <Navigation />
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="phone">
                            <div className="content">
                                <h4>téléphone</h4>
                                <p>0669044723</p>
                            </div>
                        </div>
                        <div className="email">
                            <div className="content">
                                <h4>email</h4>
                                <p>manon.trefoux@gmail.com</p>
                            </div>
                        </div>
                        <SocialNetwork />
                        </div>
                <ContactForm />
                </div>
                    <div className="credits">
                        <p>ManonTrefoux - 2021</p>
                    </div>
        </main>
    );
};

export default Contact;