import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from './../Components/Navbar';
import Swal from "sweetalert2";
import Footer from "../Components/Footer";


const Login = () => {
    const { signIn, googleLogIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                console.log({ result });
                // localStorage.setItem("user", JSON.stringify(result.user));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
    }

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                // console.log({ result })
                // toast
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                });
                localStorage.setItem("user", JSON.stringify(result.user));
                // navigate
                navigate(location?.state ? location.state : '/service')

            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <h2 className="text-2xl my-10 text-center text-purple-600">Login please</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-purple-600 font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-purple-600 font-bold">Password</span>
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
            <Footer></Footer>
        </div>
    );
};

export default Login;