import { useState, useEffect } from "react"
import axios from 'axios'
function App() {

  const [actorsList, setActorsList] = useState([])
  const [actressesList, setActressesList] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('actors')


  function handleSelect(e) { setSelectedCategory(e.target.value) }


  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then((res) =>
        setActorsList(res.data))
      .catch((err) => console.error(err))
  }
  useEffect(fetchActors, [])

  function fetchActresses() {
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
      .then((res) =>
        setActressesList(res.data))
      .catch((err) => console.error(err))
  }
  useEffect(fetchActresses, [])



  return (
    <>
      <header >
        <div className="container-fluid d-flex justify-content-between bg-secondary text-light">
          <h1 >The actresses and actors list</h1>
        </div>

      </header>

      <main >
        <div className="container ">

          <select className="form-select w-25 my-3" aria-label="Default select example"
            name="categorySelect"
            id="categorySelect"
            value={selectedCategory}
            onChange={handleSelect}>
            <option value='actors'>Actors </option>
            <option value='actresses' >Actresses</option>
          </select>



          {
            selectedCategory === 'actors' && (

              <div className="row g-4">
                {
                  actorsList.map((actor) => (

                    <div key={actor.id} className="col-12 col-sm-6 col-md-4">
                      <div className="card h-100 mb-2">
                        <img className="card-img-top object-fit-cover" style={{ height: "320px" }} src={actor.image} alt="" />
                        <div className="card-body">

                          <h3>{actor.name}</h3>
                          <p>{actor.birth_year}</p>
                          <p>{actor.nationality}</p>
                          <p>{actor.biography}</p>
                          <div>
                            <strong>
                              Konwn_for:
                            </strong>
                            <ul>

                              {
                                actor.known_for.map((known_for, index) => (
                                  <li key={index} className="list-unstyled">
                                    {known_for}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                          <div>
                            <strong>Awards:</strong>
                            <ul >
                              {
                                actor.awards.map((award, index) => (

                                  <li key={index} className="list-unstyled">
                                    {award}
                                  </li>

                                ))
                              }
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>

                  ))


                }

              </div>
            )

          }

          {
            selectedCategory === 'actresses' && (

              <div className="row g-4">
                {
                  actressesList.map((actress) => (

                    <div key={actress.id} className="col-12 col-sm-6 col-md-4">
                      <div className="card h-100 mb-2">
                        <img className="card-img-top object-fit-cover" style={{ height: "320px" }} src={actress.image} alt="" />
                        <div className="card-body">

                          <h3>{actress.name}</h3>
                          <p>{actress.birth_year}</p>
                          <p>{actress.nationality}</p>
                          <p>{actress.biography}</p>
                          <div>
                            <strong>
                              Konwn_for:
                            </strong>
                            <ul>

                              {
                                actress.known_for.map((known_for, index) => (
                                  <li key={index} className="list-unstyled">
                                    {known_for}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                          <div>
                            <strong>Awards:</strong>
                            <ul >
                              {
                                actress.awards.map((award, index) => (

                                  <li key={index} className="list-unstyled">
                                    {award}
                                  </li>

                                ))
                              }
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>

                  ))


                }



              </div>
            )}




        </div>
      </main>


      <footer></footer>
    </>
  )
}

export default App
