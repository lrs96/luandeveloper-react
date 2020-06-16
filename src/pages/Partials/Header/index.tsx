import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>Sobre mim</li>
                    <li>Trabalhos Voluntários</li>
                    <li>Skill</li>
                    <li>Trabalhos</li>
                </ul>
                <a href="#tak_me" className="btn btn-bs-outline-blue">Fale Comigo</a>
            </nav>
        </header>
    )
}

export default Header;