import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CustomNav = styled.nav`
padding: 15px 200px;
margin: 0 80px;
  border-radius: 40px;
  background-color: gray;
  font-size: 25px;
  color: white;
  
  a:hover {
    color: #12748E;
    font-size: 28px;
  }
  `;
  
  export const NavLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#12748E" : "inherit")};
  `;
  const StyledBrand = styled(Navbar.Brand)`
    color: white;
    font-family: "Kanit", sans-serif;
    font-weight: bold;
    font-size: 34px;
    cursor: pointer;
    margin-left: 40px;
    &:hover {
      color: #12748E;
    }
  `;
  
  const StyledButton = styled.button`
  background-color: #ffff5f;
  color: black;
  font-weight: bold;
  padding: 10px 100px;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0 10px 25px 1px rgba(255, 255, 0, 0.5);
  text-align: center;
  white-space: nowrap;
  font-family: "Archivo Black", sans-serif;
  font-size: 22px;
  margin-top: -10px;

  &:hover {
    padding: 15px 100px;
    margin-right: 60px;
  }
`;

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
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/about') {
      setActiveLink('About');
    } else if (path === '/login') {
      setActiveLink('Login');
    } else if (path === '/register') {
      setActiveLink(''); // No hay enlace activo en la ruta de registro
    }
  }, [location.pathname]);
  return (
    <>
      <Navbar>
        <Link to='/' style={{
          textDecoration: 'none'
        }}>
        <Navbar.Brand>
          <img
            src="https://res.cloudinary.com/madrigalsito/image/upload/v1709690342/SDH/OIG3_sqwexw.png"
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
              Home
            </NavLink>
            <NavLink
              active={activeLink === "About"}
              onClick={() => handleLinkClick("About")}
            >
              About
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

        <Link to='/register' style={{
          textDecoration: 'none'
        }}>
          <StyledButton>Free trial</StyledButton>
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
