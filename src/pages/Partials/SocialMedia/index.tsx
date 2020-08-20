import React, { useEffect, useState} from 'react';
import {FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaBehance  } from 'react-icons/fa';

import api from '../../../services/api';
import social_medias from '../../../consumers/social-media.json';


interface Sociais {
    
    social_media: [
        {
            id: Number,
            social: string,
            social_url: string,
            icon: string,
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
            <div className="social mt-3">
                {social_medias.map(social_item => (
                    <a className="social-item" key={social_item.id}
                        title={social_item.social}
                        href={social_item.social_url}
                        rel="noreferrer" target="_blank">
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SocialMedia;