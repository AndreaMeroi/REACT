import AppFooter from "../components/AppFooter"
import AppHeader from "../components/AppHeader"
import AppJumbotron from "../components/AppJumbotron"

export default function ContactsPage() {

    return (
        <>

            <main>
                <AppJumbotron title='Welcome to my website' description='This is a simple hero unit......' cta='Visit my git hub' />

                {/*Add a multifield form for my contact page so users can contact me and style it */}

                <div className="container my-5">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Send Message</button>
                    </form>

                </div>

            </main>



        </>
    )


}