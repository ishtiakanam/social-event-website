import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
// import { Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    console.log(location.pathname);

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;