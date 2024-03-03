import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Index from "../Components/Index";
import Header from "../Components/Header";

const App = () => {
  
  


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route
          path="/"
          element={
           
              <Index />
            
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
