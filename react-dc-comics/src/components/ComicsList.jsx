import ProductCard from "./ProductCard"
export default function ComicsList({ comics }) {

    console.log(comics);

    return (


        <div className="container">
            <div className="row">
                {
                    comics.map(comic => (
                        <ProductCard comic={comic} key={comic.id} />
                    ))
                }

            </div>
        </div>

    )
}

