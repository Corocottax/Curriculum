import React from 'react';
import "./Hero.css"

export const Hero = ({ info }) => {

    const { nombre, apellidos, ciudad, fechaNac, imagen} = info;

  return (
  <div className='cartaPresentacion'>

    <img className='imagenPerfil' src={imagen} alt={nombre}/>

    <div className='datos'>

        <h1>{nombre} {apellidos}</h1>

        <div className='ciudadNac'>
            <p>{ciudad}</p>
            <p>{fechaNac}</p>
        </div>

    </div>

  </div>
  );
};
