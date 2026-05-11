import { useState } from "react"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"

const app_name = 'watch list'
const list = [

  'star wars',
  'Avatar',
  'Inception',
  'Interstellar',
  'The dark Knight'
]

function App() {

  const [movies, setMovies] = useState(list)

  return (
    <>


      <AppHeader logo={app_name} movies={movies} setMovies={setMovies} />
      <AppMain title={app_name} movies={movies} setMovies={setMovies} />
      <footer>


      </footer>

    </>
  )
}

export default App
