import React, { useState } from 'react';
import "./Menu.css";
import { About } from '../About/About';
import { More } from "../More/More.jsx"
import { Education } from "../Education/Education.jsx"
import { Experience } from "../Experience/Experience.jsx"
import { CV } from "../../../Cv/Cv"

export const Menu = () => {

    const { info, educacion, experiencia, idiomas, habilidades } = CV;
  
    const [changeOption, setChangeOption] = useState("About");

    return (

        <div>

            <div className='Menu'>
                <button onClick={() => setChangeOption("About")}>

                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>SobreMi</title><circle cx="184" cy="232" r="24"/><path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z"/><circle cx="328" cy="232" r="24"/><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                    <p>Sobre Mi</p>

                </button>
                <button onClick={() => setChangeOption("Educacion")}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Educacion</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192L256 64l224 128-224 128L32 192z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"/></svg>
                    <p>Educación</p>

                </button>
                <button onClick={() => setChangeOption("Experiencia")}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Experiencia</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112"/></svg>
                    <p>Experiencia</p>

                </button>
                <button onClick={() => setChangeOption("More")}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Más</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg>
                    <p>Más</p>
                
                </button>
            </div>

            {changeOption === "About" ? <About info={ info }/> 
            : changeOption === "Educacion" ? <Education educacion={ educacion }/> 
            : changeOption === "Experiencia" ? <Experience experiencia={ experiencia }/> 
            : <More idiomas={ idiomas } habilidades={ habilidades }/>}

        </div>

    );
};
