import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";
const AddVendor = () => {
  const [vendor, setVendor] = useState({
    name: "",
    bankAccountNumber: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipcode: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !vendor.name ||
      !vendor.bankAccountNumber ||
      !vendor.bankName ||
      !vendor.addressLine1 ||
      !vendor.city ||
      !vendor.country ||
      !vendor.zipcode
    ) {
      setErrorMsg("Please fill all details");
      return;
    }
    setErrorMsg("");
    try {
      console.log("Submitting vendor data:", vendor);

      // Set the Content-Type header to indicate JSON format
      const headers = {
        "Content-Type": "application/json",
      };

      // Convert the vendor object to a JSON string
      const jsonData = JSON.stringify(vendor);

      // Make the POST request with JSON data
      await axios.post("http://127.0.0.1:3000/api/v1/vendors", jsonData, {
        headers,
      });

      navigate("/");
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Add Vendor</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={vendor.name}
          onChange={handleChange}
        />
        <label>Bank Account Number:</label>
        <input
          type="text"
          name="bankAccountNumber"
          value={vendor.bankAccountNumber}
          onChange={handleChange}
        />
        <label>Bank Name:</label>
        <input
          type="text"
          name="bankName"
          value={vendor.bankName}
          onChange={handleChange}
        />
        <label>Address Line1:</label>
        <input
          type="text"
          name="addressLine1"
          value={vendor.addressLine1}
          onChange={handleChange}
        />
        <label>Address Line2:</label>
        <input
          type="text"
          name="addressLine2"
          value={vendor.addressLine2}
          onChange={handleChange}
        />
        <label>city:</label>
        <input
          type="text"
          name="city"
          value={vendor.city}
          onChange={handleChange}
        />
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={vendor.country}
          onChange={handleChange}
        />
        <label>zipcode:</label>
        <input
          type="text"
          name="zipcode"
          value={vendor.zipcode}
          onChange={handleChange}
        />
        <b
          style={{
            fontSize: "13px",
            color: "crimson",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {errorMsg}
        </b>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddVendor;
