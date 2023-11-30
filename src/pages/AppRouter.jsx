import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products/Products";
import Orders from "./orders/Orders";
const Login = React.lazy(() => import("./login/Login"));
const Users = React.lazy(() => import("./users/Users"));
const Payments = React.lazy(() => import("./payments/Payments"));
const Home = React.lazy(() => import("./home/Home"));
const Video = React.lazy(() => import("./videos/Videos"));
const Contacts = React.lazy(() => import("./contacts/Contacts"));
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
        <Route
          element={
            <PrivateRoute>
              <Video />
            </PrivateRoute>
          }
          path="/videos"
        />
        <Route
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
          path="/contacts"
        />
        <Route element={<Login />} path="/login" />
      </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
