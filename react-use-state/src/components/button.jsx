import { useState } from "react"
import Card from "./card"


export default function Button({ languages }) {

    const [currentCard, setCurrentCard] = useState(1)


    function handleClick(e) {
        console.log('You Clicked me!', e)
        setCurrentCard(2)

    }


    return (
        <>
            <div className="cardShower">
                {
                    languages.map(language =>
                        <button key={language.id} onClick={handleClick}>
                            <a href="">{language.title}</a>
                        </button>

                          { currentCard == language.id && <Card language.id />}
                )

                }




            </div>



        </>
    )
}


