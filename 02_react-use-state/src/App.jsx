import { useState } from 'react';
import '@fontsource/source-sans-pro';
import languages from "./data/languages"
import Button from './components/button';
function App() {


  return (
    <>
      <header>

        <h1>Learn Web Development </h1>


      </header>

      <main>

        <Button languages={languages} />




      </main >
      <footer></footer>

    </>
  )
}

export default App
