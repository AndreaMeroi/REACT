import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppJumbotron from "../components/AppJumbotron";

export default function HomePage() {

    return (
        <>

            <main>
                {/*jumbotron*/}
                <AppJumbotron title='Welcome to my website' description='This is a simple hero unit......' cta='Visit my git hub' />

                {/*Products */}

                <section>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://picsum.photos/400/200" alt="" />
                                    <div className="card-body">
                                        <h3>Title</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </main>

        </>
    )


}