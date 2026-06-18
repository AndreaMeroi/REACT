import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage"
import CharacterPage from "./pages/CharacterPage"
import ContactsPage from "./pages/ContactsPage"
import AboutPage from "./pages/AboutPage"

function App() {

  return (

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

  )
}



export default App
