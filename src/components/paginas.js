import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Iconos from './iconos';
import Layout from './layout';
import { graphql } from 'gatsby'

const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem
    }
`



export const query = graphql`

`


    const Propiedades = ({data: { allStrapiPropiedades: { nodes }}}) => {


    const { nombre, descripcion, wc, estacionamiento, habitaciones, agente, imagen, precio } = nodes[0]
    

    return ( 
        <Layout>
              <main className="contenedor">
              <h1>{nombre}</h1>
                <ContenidoPagina>
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </ContenidoPagina>
                    
                </main>
                

        </Layout>
     );
}
 
export default Propiedades;