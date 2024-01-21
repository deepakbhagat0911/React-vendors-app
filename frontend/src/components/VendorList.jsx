import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./VendorList.css";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/v1/vendors?page=${currentPage}`)
      .then((response) => {
        setVendors(response.data.data.vendor || []);
        setTotalPages(response.data.data.totalPages || 1);
      })
      .catch((error) => console.error("Error fetching vendors:", error));
  }, [currentPage]);

  const handleDelete = (vendorId) => {
    axios
      .delete(`http://127.0.0.1:3000/api/v1/vendors/${vendorId}`)
      .then(() => {
        // Refresh the vendor list after deletion
        setVendors((prevVendors) =>
          prevVendors.filter((vendor) => vendor._id !== vendorId)
        );
      })
      .catch((error) => console.error("Error deleting vendor:", error));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="vendor-list-container">
      <h1>Vendors</h1>
      <Link
        to="/add-vendor"
        style={{
          fontSize: "18px",
          textDecoration: "none",
          color: "#000",
          float: "right",
          padding: "5px",
        }}
      >
        Add Vendor
      </Link>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bank Account No.</th>
            <th>Bank Name</th>
            <th>Address Line 1</th>
            <th>Address Line 2</th>
            <th>City</th>
            <th>Country</th>
            <th>Zip Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(vendors) && vendors.length > 0 ? (
            vendors.map((vendor) => (
              <tr key={vendor._id}>
                <td>{vendor.name}</td>
                <td>{vendor.bankAccountNumber}</td>
                <td>{vendor.bankName}</td>
                <td>{vendor.addressLine1}</td>
                <td>{vendor.addressLine2}</td>
                <td>{vendor.city}</td>
                <td>{vendor.country}</td>
                <td>{vendor.zipcode}</td>
                <td>
                  <Link to={`/edit-vendor/${vendor._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(vendor._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No vendors available</td>
            </tr>
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorList;
