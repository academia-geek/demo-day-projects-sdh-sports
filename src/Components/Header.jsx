import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomNav, NavLink, StyledBrand, StyledButton } from "../Styles/styled";



const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Función que actualiza el enlace activo
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    // Actualiza el enlace activo según la ruta actual
    const path = location.pathname;
    if (path === "/") {
      setActiveLink("home");
    } else if (path === "/about") {
      setActiveLink("About");
    } else if (path === "/login") {
      setActiveLink("Login");
    } else if (path === "/register") {
      setActiveLink(""); // No hay enlace activo en la ruta de registro
    }
  }, [location.pathname]);
  return (
    <>
      <Navbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Navbar.Brand>
            <img
              src="https://res.cloudinary.com/sdhsports/image/upload/v1709690342/SDH/OIG3_sqwexw.png"
              width="110"
              height="110"
              style={{
                margin: "40px 20px 40px 40px",
              }}
            />
          </Navbar.Brand>
          <StyledBrand>SDH SPORTS</StyledBrand>
        </Link>

        <Container>
          <CustomNav>
            <NavLink
              active={activeLink === "home"}
              onClick={() => {
                handleLinkClick("home");
                navigate("/");
              }}
            >
              Inicio
            </NavLink>
            <NavLink
              active={activeLink === "About"}
              onClick={() => handleLinkClick("About")}
            >
              Nosotros
            </NavLink>
            <NavLink
              active={activeLink === "Login"}
              onClick={() => {
                handleLinkClick("Login");
                navigate("/login");
              }}
            >
              Login
            </NavLink>
          </CustomNav>
        </Container>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
          }}
        >
          <StyledButton>Free trial</StyledButton>
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
