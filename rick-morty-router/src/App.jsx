import { BrowserRouter, Routes, Route } from "react-router-dom"

import axios from "axios"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage"
import CharacterPage from "./pages/CharacterPage"
import ContactsPage from "./pages/ContactsPage"
import AboutPage from "./pages/AboutPage"

import FavouritesContext from "./contexts/favouritescontext"
import { useState } from "react"

function App() {

  const [favourites, setFavourites] = useState([])
  const [characters, setCharacters] = useState([])

  function toggleFavourites(id) {
    console.log(id);

    //  setFavourites([...favourites, id])
    // if favourites includes(id)
    if (favourites.includes(id)) {
      // remove it from the array 
      console.log('remove me');
      removeFavourite(id)
    } else {
      // otherwise add it 
      console.log('add me');
      addFavourite(id)
    }

  }

  function fetchData(page) {
    console.log('you clicked on fetchData');
    //fetch the data with axios 
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => {

        //log the fetched data
        console.log(res.data.results);
        // salvo il contenuto di data (info e results)  in due variabilie
        const { info, results } = res.data

        //update the state variable 
        setCharacters(results)
      })
      .catch((err) => {
        console.error(err.message);
      })
  }

  function removeFavourite(id) {

    const filtered = favourites.filter(favId => favId !== id)
    console.log(filtered);
    setFavourites(filtered)
  }

  function addFavourite(id) {
    setFavourites([...favourites, id])
  }

  function isFavourite(id) {
    return favourites.includes(id)

  }

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites, toggleFavourites, isFavourite, fetchData, characters }}>

      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </FavouritesContext.Provider>


  )
}



export default App
