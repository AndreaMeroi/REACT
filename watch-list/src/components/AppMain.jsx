import { useState } from "react"
import WatchList from "./WatchList"

const list = [

    'star wars',
    'Avatar',
    'Inception',
    'Interstellar',
    'The dark Knight'
]



export default function AppMain({ title, movies, setMovies }) {

    const [newMovie, setNewMovie] = useState('')

    function handleInput(e) {
        setNewMovie(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newMovie);

        setMovies([newMovie, ...movies]);
        setNewMovie('')

    }

    function handleClick(index) {
        console.log('clicked element', index);
        console.log(movies);


        // filter the list 
        const filteredMovies = movies.filter((_, i) => i !== index)
        console.log(filteredMovies);

        //invoke setMovies to update the list 
        setMovies(filteredMovies)
    }


    return (

        <main>
            <div className="flex">

                <h1>{title}</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInput} value={newMovie} placeholder="Add movie..." />
                </form>

            </div>


            <WatchList list={movies} onTrashClick={handleClick} />

        </main >
    )
}