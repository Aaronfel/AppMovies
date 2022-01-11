import { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'
import MostrarPelis from '../MostrarPelis'
import './Home.css'

const Home = () => {
    
    const { arrayMovies, getMovies } = useContext(Context)


    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <MostrarPelis peliculas={arrayMovies} />
        </>
    );
}

export default Home;