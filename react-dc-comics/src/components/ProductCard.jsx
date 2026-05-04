export default function ProductCard({ comic }) {





    return (
        <>

            <div className="col">
                <div className="card">
                    <img src={comic.thumb} alt="" />
                    <h3>{comic.title}</h3>

                </div>
            </div>






        </>

    )
}