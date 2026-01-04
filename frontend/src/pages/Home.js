import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    handleSuccess("User Logged out");
    setTimeout(() => navigate("/login"), 500);
  };

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("https://login-signup-y2m9.onrender.com/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      setProducts([]);
      handleError("Session expired, login again");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome {loggedInUser}</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="products-container">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
