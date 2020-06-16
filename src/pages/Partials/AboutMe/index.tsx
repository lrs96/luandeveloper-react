import React  from 'react';
import fotoAboutMe from '../../../assets/about-me-luan-rodrigues.svg';
import './style.scss';
import SocialMedia from  '../SocialMedia';


const AboutMe = () => {
    return (
        <section className="container-fluid" id="about_me">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-4">
                        <img src={fotoAboutMe} className="img-fluid" alt="Foto Sobre Luan Rodrigues da Silva"/>
                    </div>
                    <div className="col-12 col-md-7 col-lg-5 offset-lg-3">
                        <div className="infos">
                            <h2 className="mb-2 h1 title">
                                Sobre<span className="text-bs-blue d-block">mim<span className="text-dark">.</span></span>
                            </h2>
                            <p className="mb-1 subtitle">Front End, UI desginer,  palestrante, membro do comitê da Hackathon Brasil e organizador da comunidade WordPress São Paulo. Sou apaixonado por tecnologia, livros, séries e muito ativo em comunidades de tecnologia.</p>
                            <p className="mb-0 subtitle">Amo cultivar a arte de compartilhar conhecimento e experiências com as pessoas, afim de conseguir impactar o cotidiano e a vida delas de alguma forma.</p>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;