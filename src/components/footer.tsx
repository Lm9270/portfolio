import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className='flex flex-row justify-around md:gap-20 bg-custom-gradient2 border-t-2 border-white p-10 pl-3 pr-3 md:p-10'>
            <div className='flex flex-col md:flex-row gap-5'>  
                <p>© 2025 Liam Moriconi</p>
                <Link href="MentionsLegales" className='underline hover:text-gray-700'>Voir mentions légales</Link>
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
                <a href="https://www.linkedin.com/in/liam-moriconi-ebrard-53a014359/"  target='_blank' title='Linkedin'><Image loading="lazy" src={"/images/icones/linkedin.png"} alt="Logo Linkedin" width={40} height={40}/></a>
                <a href="https://github.com/Lm9270"  target='_blank' title='Github'><Image loading="lazy" src={"/images/icones/github.png"} alt="Logo Github" width={40} height={40}/></a>
            </div>

        </div>
    );
};

export default Footer;