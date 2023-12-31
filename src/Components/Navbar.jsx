import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
// import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {

        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink
            to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-purple-600 underline font-bold" : ""}>Home</NavLink>
        </li>
        <li><NavLink
            to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-purple-600 underline font-bold" : ""}>Service</NavLink>
        </li>
        <li><NavLink
            to="/photo" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-purple-600 underline font-bold" : ""}>Photo</NavLink>
        </li>
        <li><NavLink
            to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-purple-600 underline font-bold" : ""}>Register</NavLink>
        </li>
        <li><NavLink
            to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-purple-600 underline font-bold" : ""}>Login</NavLink>
        </li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case font-bold text-3xl text-purple-600">Social Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img className="w-10 rounded-full mr-2" src={user.photoURL} alt="" />
                        <p className="mr-2">{user.email}</p>
                        <button onClick={handleSignOut} className="btn">Log Out</button>
                    </>
                        : <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;