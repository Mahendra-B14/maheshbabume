import React from "react";
import "./home.scss";
import Pie from "../charts/Pie";
import Dotnet from "../charts/Dotnet";
import Bar1 from "../charts/Bar";
const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar/> */}
      <div className="homeContainer">
        {/* <Navbar/> */}
        <div className="widget"></div>
        <div className="charts">
          <Dotnet />
          <Pie />
        </div>
        <div className="homeContainer">
          <div className="charts">
            <Bar1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
