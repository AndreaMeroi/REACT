import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import AppJumbotron from "../components/AppJumbotron"

export default function AboutPage() {

    return (
        <>

            <main>
                <AppJumbotron title='Its me Andrea' description='This is a simple hero unit......' cta='visit my website' />

                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio molestias fuga sapiente, vel ipsam mollitia tempore, blanditiis esse excepturi, reiciendis perspiciatis ex eius dolorem dolor. Recusandae dolor deserunt doloremque?
                    </p>
                </div>

            </main>


        </>
    )


}