import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Index from "../Components/Index";
import Header from "../Components/Header";
import Login from "../Components/Login";
import RegisterFormik from "../Components/Register";
import PublicRouter from "./PublicRouter";
import DashboardRouter from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import Imc from "../Components/Imc";

const App = () => {

  const [user, setuser] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth?.uid) {
        setuser(true);
      } else setuser(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setuser]);

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter isAutentication={user}>
              <Header />
              <Index />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter isAutentication={user}>
              <Header />
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouter isAutentication={user}>
              <Header />
              <RegisterFormik />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter isAutentication={user}>
              <DashboardRouter />
              <Imc/>
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
