import React, { useEffect, useState} from 'react';
import {FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaBehance  } from 'react-icons/fa';

import api from '../../../services/api';

interface Sociais {

    social_media: {
        facebook: string,
        instagram: string,
        linkedin: string,
        github: string,
        behance: string
    },
}

const SocialMedia = () => {
    const [sociais, setSociais ] = useState<Sociais[]>([])

    useEffect(() => {
        api.get('personal-data').then(response => {
            setSociais(response.data)
        })
    }, [])

    return (
            <div className="component-social">
                {sociais.map(social => (
                    <div className="social mt-3">
                        <a className="social-item" href={social.social_media.linkedin} rel="noreferrer" target="_blank">
                            <FaLinkedinIn />
                        </a>
                        <a className="social-item" href={social.social_media.github} rel="noopener" target="_blank">
                            <FaGithubAlt />
                        </a>
                        <a className="social-item" href={social.social_media.instagram} rel="noopener" target="_blank">
                            <FaInstagram />
                        </a>
                        <a className="social-item" href={social.social_media.facebook} rel="noopener" target="_blank">
                            <FaFacebookF />
                        </a>
                        <a className="social-item" href={social.social_media.behance} rel="noopener" target="_blank">
                            <FaBehance />
                        </a>
                        <a className="social-item" href="/" rel="noopener" target="_blank">
                            <FaWhatsapp />
                        </a>
                    </div>
                ))}
            </div>
    )
}

export default SocialMedia;