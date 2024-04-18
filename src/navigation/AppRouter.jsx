import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/products/Products";
import Orders from "../pages/orders/Orders";
import Category from "../pages/category/Category";
const Login = React.lazy(() => import("../pages/login/Login"));
const Users = React.lazy(() => import("../pages/users/Users"));
const Payments = React.lazy(() => import("../pages/payments/Payments"));
const Home = React.lazy(() => import("../pages/home/Home"));
const Contacts = React.lazy(() => import("../pages/contacts/Contacts"));
const PrivateRoute = React.lazy(() =>
  import("../components/auth/PrivateRoute")
);

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="p-4">
      <Routes>
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
          path="/users"
        />
        <Route
          element={
            <PrivateRoute>
              <Products/>
            </PrivateRoute>
          }
          path="/products"
        />
        <Route
          element={
            <PrivateRoute>
              <Orders/>
            </PrivateRoute>
          }
          path="/orders"
        />
        {/* <Route
          element={
            <PrivateRoute>
              <Video />
            </PrivateRoute>
          }
          path="/videos"
        /> */}
        <Route
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
          path="/contacts"
        />
        <Route
          element={
            <PrivateRoute>
              <Category/>
            </PrivateRoute>
          }
          path="/category"
        />
        <Route element={<Login />} path="/login" />
      </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
