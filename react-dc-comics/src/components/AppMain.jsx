
import Jumbotron from '../assets/img/jumbotron.jpg'
import ComicsList from "./ComicsList";


export default function AppMain({ comics }) {
    return (
        <>
            <main>

                <div className='jumbotron'>
                    <img src={Jumbotron} alt="" /></div>

                <div className="container">
                    <div className="row">
                        <ComicsList comics={comics} />
                    </div>



                </div>







            </main>
        </>

    )
}