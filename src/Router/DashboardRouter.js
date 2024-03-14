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
import Informacion from "../Components/Informacion";
import PerfilList from "../Components/PerfilList";
import Cart from "../Components/Cart";
import Pasarela from "../Components/PasarelaPago";
import ConfirmacionPago from "../Components/Confirmacion";
// import PerfilEdit from "../Components/PerfilEdit";
// import PerfilList from "../Pages/PerfilList";


const DashboardRouter = () => {
  return (
    <>
    <HeaderLogin />
      <Routes>
        <Route path="/*" element={<Perfil />} />
        <Route path="/home" element={<Home />} />
        <Route path = "/perfil" element= {<Perfil/>} />
        <Route path = "/imc" element = {<Imc/>}/>
        <Route path = "/gordo" element = {<Gordo/>}/>
        <Route path = "/estable" element = {<Estable/>}/>
        <Route path = "/flaco" element = {<Desnutrido/>}/>
        <Route path = "/addEje" element = {<AddEjercicio/>}/>
        <Route path = "/rutinas" element = {<Rutinas/>}/>
        <Route path = "/editEje" element = {<EditEjercicio/>}/>
        <Route path = "/searchEje" element = {<SearchEje/>}/>
        <Route path = "/listperfil" element = {<PerfilList/>}/>
        <Route path = "/addperfil" element = {<Perfil/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/addPro" element = {<AddProduct/>}/>
        <Route path = "/informacion/:itemid" element={<Informacion />} />
        <Route path = "/carrito" element={<Cart />} />
        <Route path = "/pasarela" element={<Pasarela />} />
        <Route path = "/confirmacion" element={<ConfirmacionPago />} />
  
      </Routes>
      </>
  );
};

export default DashboardRouter;
