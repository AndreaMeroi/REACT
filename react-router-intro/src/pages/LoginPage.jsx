import { Link } from "react-router-dom"

export default function LoginPage() {

    return (
        <>

            <div className="container">
                <h1>Login</h1>

                <div className="card">
                    <form className="card-body">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                    <div className="card-footer d-flex justify-content-between">
                        <Link to="/" >Back to home</Link>
                        <Link to="/register" >Don't you have an account? register</Link>
                    </div>

                </div>


            </div>

        </>

    )
}