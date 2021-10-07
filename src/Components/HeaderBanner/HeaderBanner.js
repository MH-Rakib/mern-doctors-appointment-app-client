import React from "react";
import Header from "./../Header/Header";
import Banner from "./../Banner/Banner";
import "./HeaderBanner.css";

const HeaderBanner = ({ showCalander }) => {
  return (
    <div className="headerBanner">
      <Header></Header>
      <Banner showCalander={showCalander}></Banner>
    </div>
  );
};

export default HeaderBanner;
