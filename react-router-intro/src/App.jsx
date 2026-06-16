import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import DefaultLayout from "../layouts/DefaultLayout"
import AuthenticationLayout from "../layouts/AuthenticationLayout"
import LoginPage from "./pages/LoginPage"
import ReistrationPage from "./pages/ReistrationPage"



function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DefaultLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />

        </Route>

        <Route element={<AuthenticationLayout />}>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<ReistrationPage />} />


        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App
