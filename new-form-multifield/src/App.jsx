import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react'

const titles = [

  'ciao mare',
  'ciao sole',
  'ciao montagne'
]

console.log(titles);


function App() {



  function handleClick() {

    console.log('You clicked me');
  }


  return (
    <>

      <div>
        <input type="text" placeholder='type your text' />
        <button onClick={handleClick}>
          click me
        </button>
      </div>


      <ul className='list-unstyled'>

        {
          titles.map((title, i) =>
            <li key={i}>
              {title}
            </li>

          )}

      </ul>

    </>
  )
}

export default App
