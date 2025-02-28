import React from "react";
import Herosection from "./Herosection";
import Quickexplainer from "./Quickexplainer";
import RewardPerformer from "./RewardPerformer";
import Managetalents from "./Managetalents";
import Services from "./Services";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <Herosection />
      <Quickexplainer />
      <RewardPerformer />
      <Managetalents />
      <Services />
      <Pricing />
    </>
  );
};

export default Home;
