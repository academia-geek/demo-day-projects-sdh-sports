import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomNav, NavLink, StyledBrand, StyledButton } from "../Styles/styled";
import { actionLogoutAsyn } from "../Redux/actions/actionsLogin";
import { useDispatch } from "react-redux";



const HeaderLogin = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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
              src="https://res.cloudinary.com/madrigalsito/image/upload/v1709690342/SDH/OIG3_sqwexw.png"
              width="140"
              height="110"
              style={{
                margin: "40px 20px 40px 40px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand style={{
            marginRight: '-40px'
          }}>
          <StyledBrand>SDH SPORTS</StyledBrand>
          </Navbar.Brand>
          
          
        </Link>

        <Container>
          <CustomNav style={{
            marginRight: '30px',
            marginLeft: '30px'
          }}>
            <NavLink
              active={activeLink === "home"}
              onClick={() => {
                handleLinkClick("home");
                navigate("/");
              }}
            >
              Home
            </NavLink>
            <NavLink
              active={activeLink === "imc"}
              onClick={() => {
                handleLinkClick("imc");
                navigate("/imc");
              }}
            >
              Calculator
            </NavLink>
            <NavLink
                active={activeLink === "rutinas"}
                onClick={() => {
                  handleLinkClick("rutinas");
                  navigate("/rutinas");
                }}
            >
              Rutines
            </NavLink>
           
            <NavLink
              active={activeLink === "Shop"}
              onClick={() => {
                handleLinkClick("Shop");
                navigate("/shop");
              }}
            >
              Shop
            </NavLink>
            <NavLink
              active={activeLink === "Perfil"}
              onClick={() => {
                handleLinkClick("Perfil");
                navigate("/perfil");
              }}
            >
              Perfil
            </NavLink>

          </CustomNav>
        </Container>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
          }}
        >
           <StyledButton
                variant="outline-success"
                onClick={() => dispatch(actionLogoutAsyn())} 
              >
                Logout
              </StyledButton>
        </Link>
      </Navbar>
    </>
  );
};

export default HeaderLogin;
