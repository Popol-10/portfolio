import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
    const token = localStorage.getItem("_auth");
    const location = useLocation()

    //product - login - accueil

    // if(!token){
    //     return <Navigate to="/login" />
    // }

    return <Outlet />
}