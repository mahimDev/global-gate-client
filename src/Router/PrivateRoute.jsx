import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation, useParams } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation()
    console.log(pathname)
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
    return <Navigate state={pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;