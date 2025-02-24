import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import HomeList from "./pages/HomeList";
import Details from "./pages/Details";
import OrderPage from "./pages/OrderPage";
import Payment from "./pages/Payment";
import PaymentModal from "./pages/PaymentModal";
import TicketResult from "./pages/TicketResult";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMovie from "./pages/AdminMovie";
import AdminAddMovie from "./pages/AdminAddMovie";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/movies",
    element: <HomeList />,
  },
  {
    path: "/movie/:id",
    element: <Details />,
  },
  {
    path: "/order/:id",
    element: <OrderPage />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/payment-modal",
    element: <PaymentModal />,
  },
  {
    path: "/ticket-result",
    element: <TicketResult />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/order-history",
    element: <OrderHistory />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/add-movie",
    element: <AdminMovie />,
  },
  {
    path: "/register-movie",
    element: <AdminAddMovie />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
