import React from 'react';
import "./Contact.css"

export const Contact = ({info}) => {

    const { email, gitHub } = info;

    return (

        <div className='contacto'>

                <a href={"mailto:" + email}>
                    <img className='logo' src='https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png' alt='gmail logo'/>
                </a>
                <a href={gitHub} >
                    <img className='logo' src='https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png' alt='github logo'/>
                </a>

        </div>

    );
};
