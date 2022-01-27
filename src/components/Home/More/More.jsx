import React from 'react';

export const More = ({ idiomas, habilidades }) => {
  return (
  
  <div>

    <div>

        <h3>Idiomas</h3>

        {idiomas.map((idioma, index) =>

            <div key={index}>

                <p className='idioma'>{idioma.idioma}</p>
                <p>{idioma.nivel}</p>

            </div>

        )}

    </div>

    <div className='habilidades'>

        <h3>Habilidades</h3>

        {habilidades.map((habilidad) => 
        
            <p>{habilidad}</p>

        )}

    </div>

  </div>
  
  );
};
