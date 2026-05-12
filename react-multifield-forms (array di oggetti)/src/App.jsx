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


  }

  function handleTrash(i) {
    console.log('clicked to trash with the index:', i);

    const filteredTasks = tasks.filter((task, index) => index != i)
    console.log(filteredTasks,);

    setTasks(filteredTasks)

    //2 OPZIONI PER ATTIVARE LA MODIFICA DELL'UI SENZA CREARE LA VARIABILE filteredTasks

    //1> setTask(tasks.filter((task,index)=> index != i))
    //2> setTask((currentTasks)=> currentTasks.filter((task,index)=> index != i))

  }

  /*
    // funzione per modificare la UI aggiungendo una nuova task
  function handleSubmit(e) {
    e.preventDefault() // indispensabile per prevenire il caricameto automatico della pagina 
    console.log('Clicked Submit');

    console.log(newTask, newTask.length);
    if (newTask.length > 5) {
      //update tasks
      console.log('You can update the tasks');
      //per clonare il vecchio state aggiungendo la nuova task e quindi aggiornare la UI utilizzo l'operatore spread(...)
      setTask([newTask, ...tasks])
      //per svuotare il compo dell'input 
      setNewTask('')

    } else {
      alert('Tasks must be at least 5 characters long')
    }


  }
  */


  /*
  // funzione per far funzionare il bottone trash 
  function handleTrash(i) {
    console.log('clicked to trash with the index:', i);

    //devo creare un nuovo array per modificare lo stato, utilizzo filter 
    // se index è diverso da i allora lo voglio nelle filteredTasks, quindi la task cliccata non sarà più nel nuovo array
    const filteredTasks = tasks.filter((task, index) => index != i)
    console.log(filteredTasks,);
    //uso setTasks per modificare la UI
    setTask(filteredTasks)

    //2 OPZIONI PER ATTIVARE LA MODIFICA DELL'UI SENZA CREARE LA VARIABILE filteredTasks

    //1> setTask(tasks.filter((task,index)=> index != i))
    //2> setTask((currentTasks)=> currentTasks.filter((task,index)=> index != i))

  }
  */


  return (
    <>

      <div className="container my-4">
        <div className="row g-3">
          <div className="col-8">

            <div className="card">

              <div className="card-body">

                <h3>Tasks To DO</h3>
                <ul className='list-group'>


                  {tasks.map((task, i) =>

                    //trasformo la className in un template litteral per poter interpolare la condizione ternaria: Se la task è due today il bg deve diventare rosso altrimenti niente quindi stringa vuota )
                    <li className={`list-group-item relative mb-2 ${task?.due_today ? `bg-danger-subtle` : ''}`} key={i}>
                      {/*non posso indicare tutto l'oggetto {task}, ma devo indicare l'elemento specifico quindi {task.title} 
                      il ? indica di prendere title SE effettivamente è presente nell'oggetto, cioè se è stato digitato nell'input*/}

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
          <div className="col-4">
            <div className="card ">
              <div className="card-body">

                <h3>Add New Task</h3>

                <form onSubmit={handleSubmit} className=''  >

                  <div className='mb-3'>

                    {/*anzichè onChange={(e) => setNomeSetter(e.target.value )} utilizzo un setter unico,
 ma nella funzione vado a spalmare per ogni elelmento del form il suo contenuto utilizzando 
 il setter spreddando ogni volta il nuovo elemento nell'intero oggetto,{(e) => setFormData({ ...formData, title: e.target.value })} 
 in questo caso title e per questo il contenuto delle tonde va tra le graffe*/}

                    <input name='title' id='title' className='form-control' type="text" placeholder='type a task to do' value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                    <select className='form-select' id='priority' name='priority' value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })}>
                      <option value="low">low</option>
                      <option value="mid">mid</option>
                      <option value="high">high</option>
                    </select>
                  </div>


                  <div className="mb-3">
                    <textarea className='form-control' name="description" id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="3" placeholder='describe yuor task...'></textarea>
                  </div>

                  {/*nel checkbox non c'è .value nel setter, ma .checked che restituisce true o false in funzione che sia checked o meno*/}

                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className='form-check-input'
                      id='due_today'
                      name='due_today'
                      onChange={(e) => setFormData({ ...formData, due_today: e.target.checked })}
                    />
                    <label className="form-check-label" htmlFor=''>due today</label>

                  </div>

                  <button className='btn btn-dark d-block' type='submit'>Add Task</button>
                </form>


              </div>



            </div>


          </div>
        </div>












      </div >

    </>
  )
}

export default App
