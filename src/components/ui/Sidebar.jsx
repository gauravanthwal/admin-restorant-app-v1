import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  CategoryIcon,
  HomeIcons,
  LogoutIcons,
  OrderIcons,
  ProductIcons,
  UserIcons,
} from "../../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/userAction";

const routes = [
  {
    id: 0,
    name: "Home",
    url: "/",
    bg: "#f43f5e",
    icon: <HomeIcons />,
  },
  {
    id: 1,
    name: "Products",
    url: "/products",
    bg: "#f43f5e",
    icon: <ProductIcons />,
  },
  {
    id: 2,
    name: "Users",
    url: "/users",
    bg: "#f43f5e",
    icon: <UserIcons />,
  },
  {
    id: 3,
    name: "Orders",
    url: "/orders",
    bg: "#f43f5e",
    icon: <OrderIcons />,
  },
  {
    id: 4,
    name: "Category",
    url: "/category",
    bg: "#f43f5e",
    icon: <CategoryIcon />,
  },
];

const SidebarComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(
    routes.findIndex((item) => item.url == location.pathname)
  );

  const { showSideBar } = useSelector((state) => state.config);

  const navigateToModule = (route) => {
    setActiveLink(route.id);
    navigate(route.url);
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    setActiveLink(routes.findIndex((item) => item.url == location.pathname));
  }, [location]);
  return (
    <div
      className={`min-h-screen max-h-screen max-w-[5rem] md:max-w-[15rem] md:min-w-[15rem] transition-all ease-in  bg-gray-100 p-2 flex-col justify-between ${
        showSideBar ? "flex" : "hidden"
      }`}
    >
      <div>
        <div className="userinfo px-2 items-center hidden md:flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <h1 className="text-xl font-bold text-center text-gray-700">
            Admin 2
          </h1>
        </div>
        <div className="links mt-8">
          {routes.map((route) => (
            <div
              className={`${
                route.id == activeLink ? `bg-rose-500 hover:bg-rose-500 text-white` : ""
              } p-2 rounded-md cursor-pointer hover:bg-gray-300 text-gray-700 font-semibold mx-2 my-4 flex justify-center md:justify-start items-center`}
              onClick={() => navigateToModule(route)}
            >
              <div className="px-2">{route.icon}</div>
              <p className="text-lg md:inline-block hidden">{route.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-sidebar">
        <button
          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
          onClick={logout}
        >
          <LogoutIcons />
        </button>
      </div>
    </div>
  );
};

export default SidebarComp;
