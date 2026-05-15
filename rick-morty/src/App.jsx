import axios from 'axios'
import { useEffect, useState } from 'react';
function App() {

  //make a state variable where store the charaters lilst
  const [characters, setCharacters] = useState([])


  function fetchData() {
    console.log('you clicked on fetchData');
    //fetch the data with axios 
    axios
      .get('https://rickandmortyapi.com/api/character')
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

  // uso useEffect per richiamare il fetch dei dati e quindi l'aggiornamento del contenuto della variabiule
  // e l'aggiornamentio della UI solo al primo caricamento 
  // se richiamassi solo fetchData() attiverei un ciclo infinito di chiamate 
  useEffect(fetchData, [])



  return (
    <>

      <header >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <strong>Rick e Morty</strong>
          </div>
          <button className='btn btn-dark' onClick={fetchData}>
            <i className='bi bi-download'></i> Fetch Data
          </button>

        </div>
      </header>
      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Rick e Morty</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this highlighted hero
              section. Check out the examples below for how you can remix and
              restyle it to your liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Explore Characters            </button>
          </div>
        </div>
        <section id="characters">
          <div className="container">
            <div className="row">

              {characters.map(character =>

                <div className="col-12 col-sm-6 col-md-4" key={character.id} >
                  <div className="card h-100">
                    <img className='card-img-top' src={character.image} alt="" />
                    <div className="card-body">
                      <h3>{character.name}</h3>
                      <span className="badge bg-dark">badge</span>
                    </div>

                  </div>
                </div>

              )}

            </div>
          </div>
        </section>


      </main>

      {/*print the data */}


    </>
  )
}



export default App
