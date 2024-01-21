// EditVendor.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditVendor = () => {
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch vendor details by ID
    axios
      .get(`http://127.0.0.1:3000/api/v1/vendors/${id}`)
      .then((response) => {
        setVendor(response.data.data.vendor || {});
      })
      .catch((error) => console.error("Error fetching vendor details:", error));
  }, [id]);

  const handleChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = Object.fromEntries(
      Object.entries(vendor).filter(([key, value]) => value !== "")
    );

    // Update vendor data using the API
    axios
      .patch(`http://127.0.0.1:3000/api/v1/vendors/${id}`, updatedData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error updating vendor:", error));
  };

  return (
    <div>
      <h1>Edit Vendor</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={vendor.name}
          onChange={handleChange}
        />

        <label>Bank Account No:</label>
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

        <label>Address Line 1:</label>
        <input
          type="text"
          name="addressLine1"
          value={vendor.addressLine1}
          onChange={handleChange}
        />

        <label>Address Line 2:</label>
        <input
          type="text"
          name="addressLine2"
          value={vendor.addressLine2}
          onChange={handleChange}
        />

        <label>City:</label>
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

        <label>Zip Code:</label>
        <input
          type="text"
          name="zipcode"
          value={vendor.zipcode}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditVendor;
