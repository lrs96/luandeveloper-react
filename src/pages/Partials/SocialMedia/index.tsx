import React, { useEffect, useState} from 'react';
import {FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaBehance  } from 'react-icons/fa';

import api from '../../../services/api';

interface Sociais {
    
    social_media: [
        {
            social: string,
            social_url: string
        }
    ]
}

const SocialMedia = () => {
    const [sociais, setSociais ] = useState<Sociais[]>([])

    useEffect(() => {
        api.get('personal-data').then(response => {
            setSociais(response.data)
            console.log(response.data)
        })
    }, [])

    return (
            <div className="component-social">
                {sociais.map(social => (
                    <div className="social mt-3">
                        {social.social_media.map(social_item => (
                            <a className="social-item"
                                title={social_item.social}
                                href={social_item.social_url}
                                rel="noreferrer" target="_blank">
                                            <FaLinkedinIn />
                            </a>
                            ))}
                    </div>
                ))}
            </div>
    )
}

export default SocialMedia;