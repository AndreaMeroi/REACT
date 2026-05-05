import { useState } from "react"


export default function AppAccordion() {

    const [currentAccordion, setCurrentAccordion] = useState(1)

    const elements = [
        {
            id: 1,
            title: 'lorem1',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum iure provident sunt at impedit illum dolores sequi quisquam similique explicabo ullam, vel libero fugiat iusto inventore ex minus! Aperiam!'

        },
        {
            id: 2,
            title: 'lorem2',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum iure provident sunt at impedit illum dolores sequi quisquam similique explicabo ullam, vel libero fugiat iusto inventore ex minus! Aperiam!'

        },
        {
            id: 3,
            title: 'lorem3',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum iure provident sunt at impedit illum dolores sequi quisquam similique explicabo ullam, vel libero fugiat iusto inventore ex minus! Aperiam!'

        },
        {
            id: 4,
            title: 'lorem4',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum iure provident sunt at impedit illum dolores sequi quisquam similique explicabo ullam, vel libero fugiat iusto inventore ex minus! Aperiam!'

        }
    ]

    function handleClick(e) {
        console.log('Clicked', e);
        console.log(currentAccordion);
        setCurrentAccordion(2)

    }

    return (
        <div className="items">

            {elements.map(item =>
                <div className="item" key={item.id}>
                    <h2 onClick={handleClick}>{item.title}</h2>

                    {/*se currentAccordion è uguale a item.id allora stampa il <p> */}
                    {currentAccordion == item.id && <p>{item.text}</p>}

                </div>
            )}

        </div>

    )
}