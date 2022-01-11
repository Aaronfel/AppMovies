import './DetallePelicula.css'

import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { useContext } from 'react';
import { Context } from '../../store/appContext';

const DetallePelicula = () => {

    /* const {arrayMovies} = useContext(Context)
  
    const {idPeli} = useParams()

    const {title, backdrop_path} = arrayMovies.find(peli => peli.id === idPeli) */



    return (  
        <>
            <h2>Detalle Peli</h2>
            {/* <h3>{title}</h3> */}


            <Link to="/" >Volver a Home</Link>
        </>
    );
}
 
export default DetallePelicula;