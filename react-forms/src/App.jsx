import { useState } from 'react'

const initialTasks = [
  'learn php',
  'learn larave',
  'learn ai integration'
]


function App() {

  // creo una variabile di stato per poter modificare il contenuto dell'input nella UI
  const [newTask, setNewTask] = useState('')
  //creo una variabile di stato per poter aggiornare la UI aggiungendo la task digitata dopo aver cliccato il bottone
  // in questo modo map ciclerà su tasks che contiene initialTasks e ciò che viene digitato nell'input 
  const [tasks, setTask] = useState(initialTasks)

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

  /*  ESEMPIO 1 
    const [fullname, setfullname] = useState('')
  */

  return (
    <>


      <div className="container">

        <div className="card col-4 m-auto">
          <div className="card-body">

            <form onSubmit={handleSubmit} className='d-flex align-items-center gap-1'  >
              <div className=''>
                <input className='form-control' type="text" value={newTask} placeholder='Type your task' onChange={(e) => setNewTask(e.target.value)} />
              </div>
              <button className='btn btn-dark d-block' type='submit'>Add Task</button>
            </form>

            <ul className='list-group mt-5'>
              {tasks.map((task, i) =>
                <li className='list-group-item d-flex justify-content-between' key={i}>
                  <span>
                    {task}
                  </span>

                  {/*per cancellare una task creo un bottone trash ed attivo un handler (handleTrash) al quale passo un indice */}
                  <button className='btn btn-danger' onClick={() => handleTrash(i)}>
                    <i className='bi bi-trash3'></i>
                  </button>

                </li>)}
            </ul>
          </div>



        </div>






      </div>




      {/* ESEMPIO 1 
    <input type="text" value={fullname} onChange={(e) => setfullname(e.target.value)} placeholder='type your name' />
      <p>{fullname}</p>
    */}

    </>
  )
}

export default App
