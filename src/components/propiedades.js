import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Iconos from './iconos';
import Layout from './layout';
import { graphql } from 'gatsby'

export const query = graphql`
    query($id: String!) {
            allStrapiPropiedades( filter: { id: { eq: $id } }) {
                nodes {
                    nombre
                    descripcion
                    wc
                    estacionamiento
                    habitaciones
                    precio
                    agente {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid ( maxWidth: 700) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
    }
`


    const Propiedades = ({data: { allStrapiPropiedades: { nodes }}}) => {


    const { nombre, descripcion, wc, estacionamiento, habitaciones, agente, imagen, precio } = nodes[0]
    

    return ( 
        <Layout>
            <h1>{nombre}</h1>
        </Layout>
     );
}
 
export default Propiedades;