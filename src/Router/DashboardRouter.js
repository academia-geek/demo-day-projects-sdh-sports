import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Components/Index"
import Header from "../Components/Header";

const DashboardRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Index />} />
      </Routes>
      </>
  );
};

export default DashboardRouter;
