import ProductCard from './productCard'

export default function AppMain() {

    const title = "Welcome to Molisana"
    return (
        <main>
            <h1 style={{ textAlign: "center" }}>{title} </h1>
            <section>
                <div className="container">
                    <div className="row">
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
                    </div>
                </div>
            </section>
        </main>
    )
}