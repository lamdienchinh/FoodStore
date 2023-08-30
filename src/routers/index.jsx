import React from "react";
import { Routes, Route } from "react-router-dom";
// import CircleSelector from "../pages/test";
// import Header from "../pages/layout/header";
// import Footer from "../pages/layout/footer";
import Restaurant from "../pages/restaurant";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      {/* <Route path="/" element={<CircleSelector />} /> */}
    </Routes>
  );
};

export default RouterList;
