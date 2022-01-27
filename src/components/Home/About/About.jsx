import React from 'react';
import "./About.css"

export const About = ({info}) => {

    const { sobreMi } = info

  return (

    <div>
  
        <h3>Sobre Mi</h3>

        {sobreMi.map((infoSobreMi, index) => 
            
            <p key={index}>{infoSobreMi.info}</p>

        )}
    
    </div>

    );
};
