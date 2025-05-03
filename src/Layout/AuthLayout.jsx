import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link, NavLink, Outlet } from "react-router";
import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";

const AuthLayout = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="pt-5 max-w-11/12 mx-auto">
        <nav>
          <div className="flex justify-between items-center">
            <div className="">
                {
                    user? <p>{user.email}</p> : ""
                }
            </div>
            <div className="navlink flex gap-5 font-medium text-accent ">
              <NavLink onClick={() => {
                // if(!user) return alert("Please login first to go Home")
              }}
              to={'/category/0'}
                className={({ isActive }) =>
                  `btn border-0 bg-base-200 text-accent ${
                    isActive && user ? "bg-secondary text-white" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink onClick={() => {
                if(!user) return alert("Please login first to go About")
              }}
                to={user ? "/about" : "/auth/login"}
                className={({ isActive }) =>
                  `btn border-0 bg-base-200 text-accent ${
                    isActive && user ? "bg-secondary text-white" : ""
                  }`
                }
              >
                About
              </NavLink>
              <NavLink onClick={() => {
                if(!user) return alert("Please login first to go Carrer")
              }}
                to={user ? "/carrer" : "/auth/login"}
                className={({ isActive }) =>
                  `btn border-0 bg-base-200 text-accent ${
                    isActive && user ? "bg-secondary text-white" : ""
                  }`
                }
              >
                Carrer
              </NavLink>
            </div>
            <div className="login-btn flex  gap-3">
              <img src={userIcon} alt="" className="bg-base-200 rounded-3xl"/>
              <Link to="/auth/login">
                <button className="btn btn-primary px-10">Login</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
