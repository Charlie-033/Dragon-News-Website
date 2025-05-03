import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
//   console.log(location.pathname)

    if(loading) return <span className="loading loading-spinner loading-xl text-center"></span>
  
  if (user || user?.email) {
    return children;
  } else {
    alert("Please Login First to View Details Page!");
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
  } 
  
};

export default PrivateRoute;
