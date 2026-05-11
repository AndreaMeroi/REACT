import { useState } from "react"

export default function AppHeader({ logo, movies, setMovies }) {

    const [query, setQuery] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(query);
        console.log(movies);

        //con la funzione includes nel cerca posso far trovare queries che contencono parzialmente del testo
        const filteredMovies = movies.filter((movie) => movie.toLowerCase().includes(query.toLowerCase()))
        console.log(filteredMovies);

        setMovies(filteredMovies)

        //come azzerare il campo seacrh? 
        //perchè devo ricare ogni volta lapagina per rifare il search?


    }


    return (
        <header>

            <div className="logo">
                {logo}            </div>

            <form className="searcBox" onSubmit={handleSubmit}>
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search.." />
                <button>Search</button>

            </form>
        </header>

    )
}