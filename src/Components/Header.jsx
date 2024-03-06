import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNav = styled.nav`
  padding: 15px 200px;
  margin: 0 80px;
  border-radius: 40px;
  background-color: gray;
  font-size: 25px;
  color: white;

  a:hover {
    color: #0000ff;
    font-size: 28px;
  }
`;

export const NavLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0000ff" : "inherit")};
`;

const StyledButton = styled.button`
  background-color: #FFFF5F;
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
    margin-right: 80px;
  }
`;

const StyledBrand = styled(Navbar.Brand)`
  color: white;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-size: 34px;
  cursor:pointer;
  margin-left: 40px;
  &:hover {
    color: #1ad3d9;
  }
`;
const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Función que actualiza el enlace activo
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  return (
    <>
      <Navbar>
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

        <Container>
          <CustomNav>
            <NavLink
              active={activeLink === "home"}
              onClick={() => handleLinkClick("home")}
            >Home
            </NavLink>
            <NavLink
              active={activeLink === "About"}
              onClick={() => handleLinkClick("About")}
            >
              About
            </NavLink>
            <NavLink
              active={activeLink === "Login"}
              onClick={() => handleLinkClick("Login")}
            >
              Login
            </NavLink>
          </CustomNav>
        </Container>
        <StyledButton>Free trial</StyledButton>
      </Navbar>
    </>
  );
};

export default Header;
