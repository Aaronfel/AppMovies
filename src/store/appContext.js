import axios from 'axios'
import { useState, createContext } from 'react'

export const Context = createContext(null)

const MoviesProvider = ({ children }) => {

    const [arrayMovies, setArrayMovies] = useState([])
    const [favoritesMovies, setFavoritesMovies ] = useState([])


    const getMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=12f0a0b9d9f6abd949bdf1fdf43cd1a6&language=en-US')
        setArrayMovies(response.data.results)
    }


    const addFavoriteMovie = (id) => {
        setFavoritesMovies([...favoritesMovies, id])
        console.log("agregada")
    }
    
    const removeFavoriteMovie = (id) => {
        setFavoritesMovies(favoritesMovies.filter(f => f !== id))
        console.log("eliminada")
    }



    return (
        <Context.Provider value={{ arrayMovies, getMovies, favoritesMovies, addFavoriteMovie, removeFavoriteMovie }}>
            {children}
        </Context.Provider>
    );
}

export default MoviesProvider;