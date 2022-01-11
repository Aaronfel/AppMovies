import './Pelicula.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../store/appContext'

const Pelicula = ({title, backdrop_path, id}) => {
    
    const {addFavoriteMovie, favoritesMovies, removeFavoriteMovie} = useContext(Context)

    const isFavorite = favoritesMovies.some(idF => idF === id)

    return (
        <div className='my-3'>
            <div className="card" style={{maxHeight: "400px", maxWidth: "18rem"}}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
                <div className="card-body">
                    <Link to={`/${id}`}> <h5 className="card-title titleMovie">{title}</h5> </Link>
                    {
                        <i  className={ isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}
                            onClick={ isFavorite ? () => removeFavoriteMovie(id) : () => addFavoriteMovie(id)}
                        >
                        </i>
                    }
                    <p className="card-text">and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Pelicula;