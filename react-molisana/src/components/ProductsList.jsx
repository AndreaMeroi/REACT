import ProductCard from './productCard'

export default function ProductsList({ products }) {

    return (
        <section>
            <div className="container">
                <div className="row">

                    {
                        products.map(product => (
                            <ProductCard product={product} key={product.id} />

                        ))
                    }

                    {/*
<div className="col">
                        <ProductCard name={'N.4 Spaghetto Quadrato Bucato'} img={'https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg'} />
                    </div>
                    <div className="col">
                        <ProductCard name={'N.5 Fettuccine'} img={"https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg"} />
                    </div>
                    <div className="col">
                        <ProductCard name={'N.6 Linguine'} img={"https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg"} />
                    </div>
                    <div className="col">
                        <ProductCard name={'N.4 Spaghetto Quadrato Bucato'} img={'https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg'} />
                    </div>
                    <div className="col">
                        <ProductCard name={'N.5 Fettuccine'} img={"https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg"} />
                    </div>
                    <div className="col">
                        <ProductCard name={'N.6 Linguine'} img={"https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg"} />
                    </div>
*/}


                </div>
            </div>
        </section>

    )
}