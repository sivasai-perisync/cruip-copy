import React from "react";
import HeroSection from "./HeroSection";
import QuickExplainer from "./QuickExplainer";
import RewardPerformer from "./RewardPerformer";
import ManageTalents from "./ManageTalents";
import Services from "./Services";
import Pricing from "./Pricing";
import Questions from "./Questions";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <QuickExplainer />
      <RewardPerformer />
      <ManageTalents />
      <Services />
      <Pricing />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
