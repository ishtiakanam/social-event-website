import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const links = <>
        <li><NavLink
            to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#51ea49] underline" : ""}>Home</NavLink>
        </li>
        <li><NavLink
            to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#51ea49] underline" : ""}>Register</NavLink>
        </li>
        <li><NavLink
            to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#51ea49] underline" : ""}>Login</NavLink>
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
                <a className="btn btn-ghost normal-case text-xl">Social Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user ? <>
                        <p>{user.email}</p>
                        <button onClick={handleLogOut} className="btn btn-primary">logout</button>
                    </> :
                        <Link to='/login'>
                            <button className="btn btn-primary">Login</button>
                        </Link>
                } */}
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">Sign Out</button>
                        : <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;