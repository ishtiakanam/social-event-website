import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Components/Navbar";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);
        // console.log(form.get('password'))

        // crate user
        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/login')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl my-10 text-center">Register please</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-2">Already have an account?<Link className="text-blue-700 font-bold" to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;


// import { useContext } from "react";
// import Navbar from "../Components/Navbar";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Link } from 'react-router-dom';

// const Register = () => {
//     const { createUser } = useContext(AuthContext)
//     const handleCreateLogIn = e => {
//         e.preventDefault();
//         console.log(e.currentTarget);
//         const form = new FormData(e.currentTarget)
//         const name = form.get('name')
//         const photo = form.get('photo')
//         const email = form.get('email')
//         const password = form.get('password')
//         console.log(name, photo, email, password);
//         createUser(email, password)
//             .then(result => {
//                 console.log(result.message);
//             })
//             .catch(err => {
//                 console.log(err.message);
//             })
//     }
//     return (
//         <div>
//             <Navbar></Navbar>
//             <h2 className="text-4xl text-center font-bold py-5">Please Register</h2>
//             <form onSubmit={handleCreateLogIn} className="md:w-2/4 lg:w-1/2 mx-auto">
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Name</span>
//                     </label>
//                     <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
//                 </div>

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Email</span>
//                     </label>
//                     <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Password</span>
//                     </label>
//                     <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
//                     <label className="label">
//                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                     </label>
//                 </div>
//                 <div className="form-control mt-6">
//                     <button className="btn btn-primary">Register</button>
//                 </div>
//             </form>
//             <p className="text-center mt-2">Already have an account?<Link className="text-blue-700 font-bold" to='/login'>Login</Link></p>
//         </div>
//     );
// };

// export default Register;