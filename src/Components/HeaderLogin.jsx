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
    if (path === "/flaco" || path === "/gordo" || path === "/estable") {
      setActiveLink("rutinas");
    } else if (path === "/home") {
      setActiveLink("home");
    } else if (path === "/imc") {
      setActiveLink("imc");
    } else if (path === "/rutinas") {
      setActiveLink("rutinas");
    } else if (path === "/shop") {
      setActiveLink("Shop");
    } else if (path === "/perfil") {
      setActiveLink("Perfil");
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
              width="140"
              height="110"
              style={{
                margin: "40px 20px 40px 40px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand >
          <StyledBrand>SDH SPORTS</StyledBrand>
          </Navbar.Brand>
          
          
        </Link>

        <Container>
          <CustomNav style={{
           display:"flex",
           justifyContent: 'center',
           alignItems: 'center'
          }}>
            <NavLink
              active={activeLink === "home"}
              onClick={() => {
                handleLinkClick("home");
                navigate("/home");
              }}
            >
              Inicio
            </NavLink>
            <NavLink
              active={activeLink === "imc"}
              onClick={() => {
                handleLinkClick("imc");
                navigate("/imc");
              }}
            >
              Calculadora
            </NavLink>
            <NavLink
                active={activeLink === "rutinas"}
                onClick={() => {
                  handleLinkClick("rutinas");
                  navigate("/rutinas");
                }}
            >
              Rutinas
            </NavLink>
           
            <NavLink
              active={activeLink === "Shop"}
              onClick={() => {
                handleLinkClick("Shop");
                navigate("/shop");
              }}
            >
              Tienda
            </NavLink>
            <NavLink
              active={activeLink === "Perfil1"}
              onClick={() => {
                handleLinkClick("Perfil1");
                navigate("/addperfil");
              }}
            >
              Agregar Perfil
            </NavLink>
            <NavLink
              active={activeLink === "Perfil"}
              onClick={() => {
                handleLinkClick("Perfil");
                navigate("/listperfil");
              }}
            >
              Editar Perfil
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
                Cerrar Sesion
              </StyledButton>
        </Link>
      </Navbar>
    </>
  );
};

export default HeaderLogin;
