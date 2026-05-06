/*

*/

export default function Card({ languages }) {

    return (

        <>
            {
                languages.map(language =>
                    <div className="card" key={language.id}>
                        <h5 className="card-title">{language.title}</h5>
                        <p className="card-text">{language.description}</p>
                    </div>
                )

            }
        </>







    )
}