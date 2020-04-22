import React from 'react';
import {Helmet} from 'react-helmet';

const Layout = ({children}) => {
    return ( 
        
        <>

            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name="description" content="Sitio web de bienes raices en Gatsby />"
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>



            </Helmet>   

            <h1>Mi Sitio en Gatsby</h1>

            {children}
        </>
     );
}
 
export default Layout;