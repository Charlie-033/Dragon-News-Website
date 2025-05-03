import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({name, photo, email, password})

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);

        // Update the user's profile
        return updateUser({
          displayName: name,
          photoURL: photo,
        })
        .then(() => {
          // console.log("Profile Updated!")
        })
        .catch(error => console.log(error))
      })
      .then(() => {
        // console.log("Profile updated");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl">
        <div className="card-body py-5">
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-semibold text-center pb-5 border-b border-gray-300">
              Register Your Account
            </h2>
            <label className="label text-md font-semibold pt-5 pb-2">
              Your Name
            </label>
            <input
              type="name"
              name="name"
              className="input w-full bg-base-200 border-none"
              placeholder="Your Name"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input w-full bg-base-200 border-none"
              placeholder="Your Photo"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none"
              placeholder="Email Address"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none"
              placeholder="Password"
              required
            />
            <div className="pt-3">
              <label className="label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox font-semibold"
                />
                Accept Terms & Conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Login
            </button>
            <p className="text-center pt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-orange-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
