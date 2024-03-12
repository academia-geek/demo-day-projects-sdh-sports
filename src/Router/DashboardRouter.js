import React from "react";
import { Route, Routes } from "react-router-dom";
import Imc from "../Pages/Imc";
import Gordo from "../Components/Gordo";
import Estable from "../Components/Estable";
import Desnutrido from "../Components/Desnutrido";
import HeaderLogin from "../Components/HeaderLogin";
import AddEjercicio from "../Components/AddEjercicios";
import Rutinas from "../Pages/Rutinas";
import Home from "../Pages/Home";
import EditEjercicio from "../Components/EditEjercicio";
import SearchEje from "../Components/SearchEje";
import Perfil from "../Pages/Perfil";
import Shop from "../Pages/Shop";
import AddProduct from "../Components/AddProduct";
import Informacion from "../Pages/Informacion";
import PerfilList from "../Components/PerfilList";
// import PerfilEdit from "../Components/PerfilEdit";
// import PerfilList from "../Pages/PerfilList";


const DashboardRouter = () => {
  return (
    <>
    <HeaderLogin />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path = "/imc" element = {<Imc/>}/>
        <Route path = "/gordo" element = {<Gordo/>}/>
        <Route path = "/estable" element = {<Estable/>}/>
        <Route path = "/flaco" element = {<Desnutrido/>}/>
        <Route path = "/addEje" element = {<AddEjercicio/>}/>
        <Route path = "/rutinas" element = {<Rutinas/>}/>
        <Route path = "/editEje" element = {<EditEjercicio/>}/>
        <Route path = "/searchEje" element = {<SearchEje/>}/>
        <Route path = "/perfil" element = {<PerfilList/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/addPro" element = {<AddProduct/>}/>
        <Route path="/informacion/:itemid" element={<Informacion />}/>
        
      </Routes>
      </>
  );
};

export default DashboardRouter;
