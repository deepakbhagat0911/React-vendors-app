import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Protected from "./components/Protected.jsx";
import Home from "./pages/Home.jsx";
import AddVendor from "./components/AddVendor.jsx";
import EditVendor from "./components/EditVendor.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/add-vendor" element={<AddVendor />} />
      <Route path="/edit-vendor/:id" element={<EditVendor />} />

      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
