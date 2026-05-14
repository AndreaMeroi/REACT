import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react'

const articlesList = [
]

const initialFormData = {
  title: '',
  author: '',
  notes: '',
  category: '',
  checked: false

}


function App() {


  const [articles, setArticles] = useState(articlesList)
  const [formData, setFormData] = useState(initialFormData)

  function handleSubmit(e) {
    e.preventDefault()

    const article = {
      id: Date.now(),
      ...formData
    }
    console.log(article);


    setArticles([...articles, article])
    setFormData(initialFormData)

  }

  function handleTrash(i) {
    console.log('Stai eliminando un elemento con indice:', i);



    const filteredArticles = articles.filter((article, index) => index != i)
    console.log(filteredArticles);

    setArticles(filteredArticles)

  }

  function handleFormData(e) {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({ ...formData, [e.target.name]: value })


  }



  // ERRORE: la lista aggiornata si vede in console, ma non nell'UI, all'invio l'elenco aggiornato di articoli si vede nell'input e non nella UL 
  return (
    <>

      <div className="container">
        <div className="row mt-4">

          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-2">
                    <input className="form-control" type="text" name='title' id="title" value={formData.title} placeholder='type article title' onChange={handleFormData} />
                  </div>
                  <div className="input-group mb-2">
                    <input className="form-control" type="text" name='author' id="author" value={formData.author} placeholder='type author name' onChange={handleFormData} />
                  </div>
                  <div className="input-group mb-2">
                    <textarea className="form-control" name="notes" id="notes" value={formData.notes} placeholder='type your notes.. ' onChange={handleFormData} ></textarea>
                  </div>
                  <div className="input-group mb-2">
                    <select className="form-select" name="category" id="category" value={formData.category} onChange={handleFormData}>
                      <option value="FrontEnd">FrontEnd</option>
                      <option value="BackEnd">BackEnd</option>
                      <option value="UI-UX">UI-UX</option>
                    </select>
                  </div>

                  {/*BONUS */}

                  <div className="input-group mb-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name='pubblicato'
                        id="pubblicato"
                      />
                      <label className="form-check-label" htmlFor="pubblicato"> Pubblicato </label>
                    </div>


                  </div>

                  <button className='btn btn-primary position-absolute bottom-0 end-0 m-2' >
                    click me
                  </button>
                </form>

              </div>
            </div>
          </div>



          <div className="col-8">
            <div className="card">
              <div className="card-body">

                <ul className='list-unstyled list-group'>

                  {
                    articles.map((article, i) =>
                      <li className='list-group-item d-flex relative justify-content-between align-items-center p-1 mb-2 relative' key={i}>

                        <div className="d-flex flex-column g-1">

                          <strong>
                            {article?.title}
                          </strong>
                          <h2>{article?.author}</h2>
                          <p>{article?.notes}</p>
                          <div>
                            <label className="badge  text-bg-primary d-block mb-2" htmlFor="">{article?.category}</label>
                            <label className="badge text-bg-success d-block " htmlFor="">Pubblicato</label>
                          </div>
                        </div>


                        <button className='btn btn-danger position-absolute top-0 end-0 m-2' onClick={() => handleTrash(i)}>
                          <i className='bi bi-trash3'></i>
                        </button>
                      </li>

                    )}

                </ul>

              </div>
            </div>


          </div>




        </div>
      </div>





    </>
  )
}

export default App
