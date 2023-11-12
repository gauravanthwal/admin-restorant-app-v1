import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser } from "../../store/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuth} = useSelector((state)=>state.user)
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e)=>{
    e.preventDefault();

    if(!loginForm.username || !loginForm.password){
      return toast.error("Please enter all fields")
    }

    dispatch(loginAdminUser(loginForm))
  }

  useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
  },[isAuth])
  return (
    <section className="h-screen flex justify-center">
      <div className="mt-10 md:min-w-[500px] min-w-full">
        <form className="border my-2 p-2  px-8 py-4 rounded-md bg-gray-50 shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-600 py-4">Log In</h1>
          <div className="mb-3">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              value={loginForm.username}
              onChange={(e) =>
                setLoginForm({ ...loginForm, username: e.target.value })
              }
              id="username"
              type="username"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              value={loginForm.password}
              type="password"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Password"
              required
            />
          </div>
          <button onClick={handleLogin} className="px-8 py-2 my-2 rounded-lg bg-gradient-to-b to-green-400 from-green-500 hover:opacity-90">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
