import axios from 'axios'
import { useState, createContext } from 'react'

export const Context = createContext(null)

const MoviesProvider = ({ children }) => {
    const [arrayMovies, setArrayMovies] = useState([])

    const getMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=91bfea0720a0cb84d46c80a51248f71e&language=en-US')
        setArrayMovies(response.data)
    }

    return (
        <Context.Provider value={{ arrayMovies, getMovies }}>
            {children}
        </Context.Provider>
    );
}

export default MoviesProvider;