import React from "react";
import { Route, Routes } from "react-router-dom";
import Imc from "../Components/Imc";
import Gordo from "../Components/Gordo";
import Estable from "../Components/Estable";
import Desnutrido from "../Components/Desnutrido";

const DashboardRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path = "/*" element = {<Imc/>}/>
        <Route path = "/gordo" element = {<Gordo/>}/>
        <Route path = "/estable" element = {<Estable/>}/>
        <Route path = "/flaco" element = {<Desnutrido/>}/>

      </Routes>
      </>
  );
};

export default DashboardRouter;
