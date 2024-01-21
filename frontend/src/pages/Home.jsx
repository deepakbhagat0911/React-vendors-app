import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Vendor from "../components/Vendor";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleLogout} style={{ float: "right" }}>
        Logout
      </button>
      <Vendor />
    </div>
  );
};

export default Home;
