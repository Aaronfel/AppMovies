import Pelicula from '../Pelicula';
import './MostrarPelis.css'

const MostrarPelis = ({peliculas}) => {
    return (
        <div className='d-flex flex-wrap justify-content-evenly'>
            {peliculas.map((pelicula, index) => (
                <Pelicula key={index} {...pelicula}/>
            ))}
        </div>
    );
}

export default MostrarPelis;