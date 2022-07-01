import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const DashboardPage = () => {
  const token = sessionStorage.getItem("AuthUser");
  const [name, setName] = useState("Loading");
  console.log(sessionStorage.getItem("AuthUser"));
  axios
    .get("http://localhost:8081/getuname", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data != null) {
        setName(response.data);
        // sessionStorage.setItem("AuthUser", JSON.stringify(d.jwttoken));
        // console.log(d.jwttoken);
        console.log(response.data);
      }
    });
  return (
    <>
      <Navbar />
      <div className="cantainer">
        <h1>
          Welcome <span style={{ textTransform: "uppercase" }}>{name}</span>{" "}
        </h1>
      </div>
    </>
  );
};

export default DashboardPage;
