import { useState } from 'react';
import Card from './card';

export default function Button({ languages }) {


    // 2. Crea lo stato. Inizialmente è null (nessun bottone cliccato)
    const [selectedLanguage, setSelectedLanguage] = useState(0)

    console.log("Linguaggio selezionato attualmente:", selectedLanguage);

    function handleClick(language) {
        // Salviamo l'intero oggetto del linguaggio cliccato
        console.log('You clicked me!', language.title);
        setSelectedLanguage(language)

    }

    return (

        <>
            <div className="container">
                <div className="buttons">


                    {
                        languages.map(language => (
                            <button
                                key={language.id}
                                onClick={() => handleClick(language)} className={selectedLanguage?.id === language.id ? "btn-active" : "btn-default"}>
                                <h3>{language.title}</h3>
                            </button>
                        ))}

                </div>
                <div className="cardShower">

                    {selectedLanguage ? (
                        // Se selectedLanguage NON è null, mostra la card selezionata
                        <div className="card" key={selectedLanguage.id}>
                            <h5 className="card-title">{selectedLanguage.title}</h5>
                            <p className="card-text">{selectedLanguage.description}</p>
                        </div>
                    ) :
                        // Altrimenti (se è null), mostra un messaggio o nulla
                        (<p> nessun linguaggio selezionato </p>)



                    }

                </div>

            </div>

        </>




    )
}