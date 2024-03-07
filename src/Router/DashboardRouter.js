import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Components/Index"
import Header from "../Components/Header";
import Home from "../Components/Home";
import Imc from "../Components/Imc";

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path = "/Imc" element = {<Imc/>}/>
      </Routes>
      </>
  );
};

export default DashboardRouter;
