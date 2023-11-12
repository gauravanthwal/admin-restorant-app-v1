"use client";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { logoutUser } from "../../store/actions/userAction";
import { MenuBarIcons } from "../../assets/icons/icons";
import { toggleSideBar } from "../../store/actions/configAction";

export const getWindowWidth = () => {
  return window.innerWidth;
};

const Navbar = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);

  const { isAuth } = useSelector((state) => state.user);
  const { showSideBar } = useSelector((state) => state.config);

  const logout = () => {
    dispatch(logoutUser());
  };

  const sideBarToggle = () => {
    dispatch(toggleSideBar());
  };

  return (
    <header className={`p-4 ${!showSideBar && 'bg-gray-100'}`}>
      <div>
        <button className="" onClick={sideBarToggle}>
          <MenuBarIcons />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
