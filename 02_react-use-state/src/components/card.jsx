import { useState } from 'react';
export default function Card(languages) {

    return (

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

    )
}