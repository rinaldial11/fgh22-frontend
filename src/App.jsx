import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeList from "./pages/HomeList";
import Details from "./pages/Details";
import OrderPage from "./pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomeList />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
