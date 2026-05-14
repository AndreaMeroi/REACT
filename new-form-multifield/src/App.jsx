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

  function handleChange(e) {

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
                    <input className="form-control" type="text" name='title' id="title" value={formData.title} placeholder='type article title' onChange={handleChange} />
                  </div>
                  <div className="input-group mb-2">
                    <input className="form-control" type="text" name='author' id="author" value={formData.author} placeholder='type author name' onChange={handleChange} />
                  </div>
                  <div className="input-group mb-2">
                    <textarea className="form-control" name="notes" id="notes" value={formData.notes} placeholder='type your notes.. ' onChange={handleChange} ></textarea>
                  </div>
                  <div className="input-group mb-2">
                    <select className="form-select" name="category" id="category" value={formData.category} onChange={handleChange}>
                      <option value="" disabled>Scegli una categoria...</option>
                      <option value="FrontEnd">FrontEnd</option>
                      <option value="BackEnd">BackEnd</option>
                      <option value="UI-UX">UI-UX</option>
                    </select>
                  </div>

                  {/*BONUS */}

                  <div className="input-group mb-2">


                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="checked" id="checked" checked={formData.checked} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="">Pubblicato </label>
                    </div>


                  </div>

                  <button className='btn btn-primary position-absolute bottom-0 end-0 m-2' >
                    Submit                  </button>
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

                        <div className="d-flex flex-column gap-1">
                          <strong>{article?.title}</strong>
                          <h2>{article?.author}</h2>
                          <p>{article?.notes}</p>

                          <div className="d-flex gap-1">
                            {/* Stampa SOLO se category esiste e non è una stringa vuota */}
                            {article.category && article.category.trim() !== "" && (
                              <span className="badge text-bg-primary">{article.category}</span>
                            )}

                            {/* Stampa SOLO se checked è strettamente true */}
                            {article.checked === true && (
                              <span className="badge text-bg-success">Pubblicato</span>
                            )}
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
