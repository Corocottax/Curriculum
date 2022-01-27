import React from 'react';

export const Experience = ({ experiencia }) => {
  return (
  
  <div>

    {experiencia.map((experiencia, index) => 
            
        <div key={index}>
            <h3>{experiencia.nombre}</h3>
            <p>{experiencia.fecha}</p>
            <p>{experiencia.lugar}</p>
            <p>{experiencia.descripcion}</p>
        </div>

    )}

  </div>
  
  );
};
