import Pelicula from '../Pelicula';
import './MostrarPelis.css'

const MostrarPelis = ({peliculas}) => {
    return (
        <>
        {peliculas.map(pelicula => (
            <Pelicula {...pelicula}/>
        ))}
        </>
    );
}

export default MostrarPelis;