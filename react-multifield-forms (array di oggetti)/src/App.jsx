import { useState } from 'react'

// salvo un array vuoto per partire con la pagina vuota 
const initialTasks = [
]

const initialFormData = {
  title: '',
  priority: 'low',
  description: '',
  due_today: false,

}


function App() {

  /* 
  const [newTask, setNewTask] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')
  const [due_today, setDue_today] = useState('')
  */

  const [formData, setFormData] = useState(initialFormData)
  const [tasks, setTasks] = useState(initialTasks)

  function handleSubmit(e) {
    e.preventDefault()



    const task = {
      id: Date.now(), // date.no() produce un id sempre univoco perchè stampa la data secondi compresi in cui avviene il click 
      ...formData // stampa tutto il nuovo oggetto costruito con i dati inseriti nei campi del form 
    }

    console.log(task);
    //devo mettere task tra le quadre, perchè map è un metodo degli array 
    setTasks([task, ...tasks])

    // per svuotare il form dopo averlo inviato 
    setFormData(initialFormData)

  }

  /* 
  nella funzione handleChange posso racchiudere nella funzione la parte di codice
  (e) => setFormData({ ...formData, key: e.target.value }) 
  e passare ad onChange direttamente handleChange lasciando il codice molto più ordinato 
  */
  function handleChange(e) {
    /*
       console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.type);

    */

    // creo la variabile value per adattare la risposta anche agli elementi che non hanno il value, come checkbox
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    console.log(value);

    // creo dinamicamente la chiave mettendo tra le quadre il name dell'elemento
    console.log({ ...formData, [e.target.name]: value });

    //attivo il setter per modificare la UI 
    setFormData({ ...formData, [e.target.name]: value })


  }

  function handleTrash(i) {
    console.log('clicked to trash with the index:', i);

    const filteredTasks = tasks.filter((task, index) => index != i)
    console.log(filteredTasks,);

    setTasks(filteredTasks)

  }

  return (
    <>

      {/*TASK LIST  */}

      <div className="container my-4">
        <div className="row g-3">
          <div className="col-8">

            <div className="card">

              <div className="card-body">

                <h3>Tasks To DO</h3>
                <ul className='list-group'>


                  {tasks.map((task, i) =>

                    /*
                    trasformo la className in un template litteral per poter 
                    interpolare la condizione ternaria: Se la task è due today 
                    il bg deve diventare rosso altrimenti niente quindi stringa vuota )
                     */
                    <li className={`list-group-item relative mb-2 ${task?.due_today ? `bg-danger-subtle` : ''}`} key={i}>
                      {/*non posso indicare tutto l'oggetto {task}, ma devo indicare 
                      l'elemento specifico quindi {task.title} 
                       il ? indica di prendere title SE effettivamente è 
                       presente nell'oggetto, cioè se è stato digitato nell'input*/}

                      <div className="badge bg-dark position-absolute top-0 end-0 m-2">{task?.priority}</div>
                      <strong>
                        {task?.title}
                      </strong>
                      <p>{task?.description}</p>

                      <button className='btn btn-danger' onClick={() => handleTrash(i)}>
                        <i className='bi bi-trash3'></i>
                      </button>

                    </li>)}
                </ul>

              </div>

            </div>


          </div>

          {/*FORM */}
          <div className="col-4">
            <div className="card ">
              <div className="card-body">

                <h3>Add New Task</h3>

                <form onSubmit={handleSubmit} className=''  >

                  <div className='mb-3'>

                    {/*anzichè onChange={(e) => setNomeSetter(e.target.value )} utilizzo un setter unico,
 ma nella funzione vado a spalmare per ogni elelmento del form il suo contenuto utilizzando 
 il setter spreddando ogni volta il nuovo elemento nell'intero oggetto,{(e) => setFormData({ ...formData, title: e.target.value })} 
 in questo caso title e per questo il contenuto delle tonde va tra le graffe
 
  <input name='title' id='title' className='form-control' type="text" placeholder='type a task to do' value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
 */}

                    <input name='title' id='title' className='form-control' type="text" placeholder='type a task to do' value={formData.title} onChange={handleChange} />

                  </div>
                  <div className='mb-3'>
                    {/*<select className='form-select' id='priority' name='priority' value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })}>*/}
                    <select className='form-select' id='priority' name='priority' value={formData.priority} onChange={handleChange}>
                      <option value="low">low</option>
                      <option value="mid">mid</option>
                      <option value="high">high</option>
                    </select>
                  </div>


                  <div className="mb-3">
                    {/* <textarea className='form-control' name="description" id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="3" placeholder='describe yuor task...'></textarea>*/}
                    <textarea className='form-control' name="description" id="description" value={formData.description} onChange={handleChange} rows="3" placeholder='describe yuor task...'></textarea>
                  </div>

                  {/*nel checkbox non c'è .value nel setter, ma .checked che restituisce true o false in funzione che sia checked o meno*/}

                  <div className="form-check mb-3">

                    <input
                      type="checkbox"
                      className='form-check-input'
                      id='due_today'
                      name='due_today'
                      /* onChange={(e) => setFormData({ ...formData, due_today: e.target.checked })} */
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor=''>due today</label>

                  </div>

                  <button className='btn btn-dark d-block' type='submit'>Add Task</button>
                </form>


              </div>



            </div>


          </div>
        </div >

      </div >

    </>
  )
}

export default App
