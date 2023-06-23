import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    const {authState: {logged}} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname+search;
    localStorage.setItem('lastPath', lastPath);
    console.log('Rerender');

    return (logged)
        ? children
        : <Navigate to={'/login'} />
}