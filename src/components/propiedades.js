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
                estacionamiento
            }
        }
    }
`


const Propiedades = ({data}) => {

    

    return ( 
        <Layout>
            <h1>Renzo</h1>
        </Layout>
     );
}
 
export default Propiedades;