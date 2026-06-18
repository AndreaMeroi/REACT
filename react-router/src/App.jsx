import { BrowserRouter, Routes, Route } from "react-router-dom"

//layouts
import DefaultLayout from "./layouts/DefaultLayout"

//pages
import HomePage from "./assets/pages/HomePage"
import ChiSiamo from "./assets/pages/ChiSiamo"
import Prodotti from "./assets/pages/Prodotti"
import Prodotto from "./assets/pages/Prodotto"



function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotto/:id" element={<Prodotto />} />
          </Route>

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
