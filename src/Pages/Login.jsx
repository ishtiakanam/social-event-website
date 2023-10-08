import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from './../Components/Navbar';
import Swal from "sweetalert2";


const Login = () => {
    const { signIn, googleLogIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then()
            .catch()
    }

    const handleLogin = e => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result)
                // toast
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                // navigate
                navigate(location?.state ? location.state : '/')

            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl my-10 text-center">Login please</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <hr className="my-5" />
                <div className=" text-center">
                    Or, <button onClick={handleGoogleLogIn} className="text-blue-600 font-bold btn">Log in with Google</button>
                </div>
                <p className="text-center mt-2">Don not have an account.Please <Link className="text-blue-700 font-bold" to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;