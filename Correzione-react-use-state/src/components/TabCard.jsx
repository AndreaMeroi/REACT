// passo le hooks title e description da utilizzare nella funzione 
export default function TabCard({ title, description }) {

    return (
        <div className="card mt-5">
            <div className="card-body">
                {/* tra le quadre l'indice del bottone cliccato per selezionare il testo corrispondente(vedi nell'oggetto) */}
                <h2>{title}</h2>
                <p>
                    {description}
                </p>

            </div>

        </div>
        // la card accetta dati in ingresso es. title e description perciò qualsiasi title o description saranno passati alla card 


        /* come l'ho copiata da App.js per componentizzarla

         <div className="card mt-5">
            <div className="card-body">
               //tra le quadre l'indice del bottone cliccato per selezionare il testo corrispondente(vedi nell'oggetto)
                <h2>{languages[currentTab].title}</h2>
                <p>{languages[currentTab].description}</p>

            </div>

        </div>
        
        */



    )
}