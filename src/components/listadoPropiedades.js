import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades, guardarPropiedades] = useState([]);

    // Filtrado de propiedades
    const { FiltroUI } = useFiltro();

    useEffect(() => {
        guardarPropiedades(resultado);
    }, [])
    

    //console.log(propiedades)
    return ( 
        <>
            <h2 css={css `
                margin-top: 5rem;
            `}>Nuestras Propiedades</h2>

            {FiltroUI()}

            <ul className={listadoPropiedadesCSS.propiedades}>
                {propiedades.map( propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListadoPropiedades;