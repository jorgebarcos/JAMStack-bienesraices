import React from 'react';
import { Link } from 'gatsby';

const Navegacion = () => {
    return ( 

        <nav>
            <Link
                to={'/'}
            >Inicio</Link>
            <Link
                to={'/nosotros'}
            >Nosotros</Link>
            <Link to={'/propiedades'}>Propiedades</Link>
        </nav>

     );
}
 
export default Navegacion;