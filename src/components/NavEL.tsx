import React from 'react';

export interface Props {
    name: string
    key: number
    illu: string
    alt: string
}

const NavEl: React.FC<Props> = ({name, alt, illu}) => {
    return (
        <li className='nav-el'>
            <img src={illu} alt={alt} className='nav-el__img'/>
            <p className='nav-el__name'>{name}</p>
        </li>
    );
};

export default NavEl;