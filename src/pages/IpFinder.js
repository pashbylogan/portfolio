import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IpFinder() {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://ifconfig.me/ip");
      const data = await response.text();
      setIpAddress(data);
    }
    getData();
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#343a40",
    marginBottom: "1rem",
  };

  const ipAddressStyle = {
    fontSize: "1.5rem",
    color: "#495057",
    backgroundColor: "#e9ecef",
    padding: "1rem",
    borderRadius: "5px",
  };

  const homeLinkStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    textDecoration: "none",
    color: "white",
  };

  const homeIconStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "24px",
  };

  return (
    <div style={containerStyle}>
      <Link to="/" style={homeLinkStyle}>
        <h4 style={homeIconStyle}>🏠</h4>
      </Link>
      <h1 style={headingStyle}>Your IP Address</h1>
      <p style={ipAddressStyle}>{ipAddress}</p>
    </div>
  );
}

export default IpFinder;
