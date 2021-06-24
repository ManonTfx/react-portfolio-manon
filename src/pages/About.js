import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import SocialNetwork from '../components/SocialNetwork';


const About = () => {
    return (
        <div className="about">
            <Mouse />
            <Navigation />
            <div className="content-about">
                <div className="about-presentation">
                    <h1>Bonjour,<br /> je suis Manon !</h1>
                    <p>Il y a un an et demi, j'ai entrepris une reconversion dans le développement web. Passionnée de design et 
                        ayant un fort intérêt pour le code, j'ai commencé par me former seule avant de poursuivre par une formation à l'école Doranco.
                        Celle-ci ma permis, sur 4 mois de formation et 2 mois de stage, de consolider mes connaissances,
                        de réaliser que je ne voulais pas faire un autre métier que celui de développeuse et d'obtenir un titre professionel reconnu.
                        Je souhaite à présent poursuivre en alternance avec la Wild Code School et intégrer la formation "concepteur developpeur d'application".
                        Cela me permettrais de consolider mes compétences en tant que développeuse dans une entreprise et de me spécialiser dans ce qui m'anime
                        le plus, le front 🖤 <br />
                        Je suis une personne motivée, créative et toujours de bonne humeur 🙃
                        Amoureuse de ce que j'apprends depuis le début de ma reconversion, j'ai hâte d'intégrer l'entreprise qui aura confiance en mon profil ! 
                    </p>
                    <SocialNetwork />
                    <a href={process.env.PUBLIC_URL + '/assets/files/manontrefoux-cv.pdf'} className="hover" target="blank"><button>Telecharger mon CV</button></a> <br />
                    <a href={process.env.PUBLIC_URL + '/assets/files/planningseptembre2021-wildcodeschool.pdf'} className="hover" target="blank"><button>Telecharger le planning de l'alternance</button></a>
                    <a href={process.env.PUBLIC_URL + '/assets/files/plaquettecontratpro-wildcodeschool.pdf'} className="hover" target="blank"><button>Telecharger la plaquette du contrat de professionalisation</button></a>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/manon.jpeg'} alt="manon" />
            </div>
            <Skills />
        </div>
    );
};

export default About;