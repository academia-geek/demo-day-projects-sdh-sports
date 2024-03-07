import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Components/Index"
import Header from "../Components/Header";
import Home from "../Components/Home";

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </>
  );
};

export default DashboardRouter;
