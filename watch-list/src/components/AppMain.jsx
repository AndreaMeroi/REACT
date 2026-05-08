import { useState } from "react"
import WatchList from "./WatchList"

const list = [

    'star wars',
    'Avatar',
    'Inception',
    'Interstellar',
    'The dark Knight'
]



export default function AppMain({ title }) {

    const [newMovie, setNewMovie] = useState('')
    const [movies, setMovies] = useState(list)


    function handleInput(e) {
        setNewMovie(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newMovie);

    }

    return (

        <main>
            <div className="flex">

                <h1>{title}</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInput} value={newMovie} placeholder="Add movie..." />
                </form>

            </div>


            <WatchList list={list} />


        </main >
    )
}