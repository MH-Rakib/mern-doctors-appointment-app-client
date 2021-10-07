import React from "react";
import "./Home.css";
import HeaderBanner from "./../../Components/HeaderBanner/HeaderBanner";
import BusinessInfo from "./../../Components/BusinessInfo/BusinessInfo";
import OurService from "./../../Components/OurService/OurService";
import DentalCare from "./../../Components/DentalCare/DentalCare";
import MakeAppoinment from "./../../Components/MakeAppoinment/MakeAppoinment";
import OurDoctors from "./../../Components/OurDoctors/OurDoctors";
import ContactUs from "./../../Components/ContactUs/ContactUs";
import Footer from "./../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <BusinessInfo></BusinessInfo>
      <OurService></OurService>
      <DentalCare></DentalCare>
      <MakeAppoinment></MakeAppoinment>
      <OurDoctors></OurDoctors>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
