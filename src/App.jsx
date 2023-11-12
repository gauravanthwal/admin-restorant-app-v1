// import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import AppRouter from "./pages/AppRouter";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStorage } from "./utils/storage";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateUserFromStorage } from "./store/actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (getStorage("auth") && getStorage("token")) {
      dispatch(updateUserFromStorage());
    }
  }, []);

  return (
    <div className="">
      <ToastContainer theme="colored" />
      <div className="flex">
        {isAuth && <Sidebar />}
        <div className={`w-full`}>
          {isAuth && <Navbar />}

          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
