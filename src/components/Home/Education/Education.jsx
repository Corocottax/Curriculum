import React from 'react';

export const Education = ({ educacion }) => {

  return (
    <div>

        {educacion.map((educacion, index) => 
            
            <div key={index}>
                <h3>{educacion.nombre}</h3>
                <p>{educacion.fecha}</p>
                <p>{educacion.lugar}</p>
            </div>

        )}

    </div>
  );
};
