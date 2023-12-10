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
    email: "",
    password: "",
  });

  const handleLogin = (e)=>{
    e.preventDefault();

    if(!loginForm.email || !loginForm.password){
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
        <form className="border my-2 p-2  px-8 py-4 rounded-md  shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-600 py-4"></h1>
          <div className="mb-3">
            <label  htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              id="email"
              type="email"
              className="bg-gray-50 border px-4 py-3 border-gray-300 text-gray-900 rounded-lg  block w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              value={loginForm.password}
              type="password"
              className="bg-gray-50 border px-4 py-3 border-gray-300 text-gray-900 rounded-lg  block w-full"
              placeholder="Password"
              required
            />
          </div>
          <button onClick={handleLogin} className="px-8 py-3 my-2 mb-6 w-full text-lg hover:text-white transition-all  font-semibold rounded-lg bg-gradient-to-b to-rose-400 from-rose-500 hover:opacity-90">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
