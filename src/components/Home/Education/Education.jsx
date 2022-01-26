import React from 'react';

export const Education = ({ educacion }) => {

  return (
    <div>

        {educacion.map((educacion) => 
            
            <div>
                <h3>{educacion.nombre}</h3>
                <p>{educacion.fecha}</p>
                <p>{educacion.lugar}</p>
            </div>

        )}

    </div>
  );
};
