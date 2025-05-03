import React, { useContext } from "react";
import { Link, Navigate, NavLink, useLocation, useNavigate, useParams } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {pathname} = useLocation();
  // console.log(pathname);
  const isCategoryPage = pathname.startsWith("/category/");
  // const { id } = useParams();
  const { user, logOut } = useContext(AuthContext);
//   console.log(user);

  const handleLogOut = () => {
    logOut().then(alert("Logged Out Succesfully")).catch(error => console.log(error))
  }
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="navlink flex gap-5 font-medium text-accent">
        <NavLink
          to={`/category/0`}
          className={
            `btn border-0 bg-base-200 text-accent ${
              isCategoryPage ? "bg-secondary text-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `btn border-0 bg-base-200 text-accent ${
              isActive ? "bg-secondary text-white" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/carrer"
          className={({ isActive }) =>
            `btn border-0 bg-base-200 text-accent ${
              isActive ? "bg-secondary text-white" : ""
            }`
          }
        >
          Carrer
        </NavLink>
      </div>
      <div className="login-btn flex  gap-3">
        <img src={`${user ? user.photoURL : userIcon}`} alt="" className="w-10 rounded-full"/>
        {user ? (
          <Link to="/auth/login">
            <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button>
          </Link>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary px-10">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
