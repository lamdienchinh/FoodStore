import React from "react";
import { Routes, Route } from "react-router-dom";
// import CircleSelector from "../pages/test";
// import Header from "../pages/layout/header";
// import Footer from "../pages/layout/footer";
import Restaurant from "../pages/restaurant";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Main from "../pages/layout/main";
import Menu from "../pages/menu";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      <Route element={<Main />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu/> } />
      </Route>
      {/* <Route path="/" element={<CircleSelector />} /> */}
    </Routes>
  );
};

export default RouterList;
