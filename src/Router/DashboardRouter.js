import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Components/Index"

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Index />} />
      </Routes>
    </>
  );
};

export default DashboardRouter;
