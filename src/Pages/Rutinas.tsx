import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  CustomNav,
  HeaderContainer,
  LinkRutine,
  MiniNavLink,
  NavLink,
  NavLinkPeque,
  NavbarPeque,
  Navigation,
  Rutine,
  StyledCarousel,
  Titulo,
} from "../Styles/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteEjerciciosAsyn,
  actionListEjerciciosAsyn,
} from "../Redux/actions/actionsEjercicios";
import {
  Button,
  Card,
  CardGroup,
  Carousel,
  Container,
  ListGroup,
  Modal,
} from "react-bootstrap";
import EditEjercicio from "../Components/EditEjercicio";

const Rutinas = () => {
  const dispatch = useDispatch();
  const { ejercicios } = useSelector((store:any) => store.ejerciciosStore);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p:any) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionListEjerciciosAsyn());
  }, []);

  return (
    <>
      <HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "-40px" }} to="/addEje">
            Añadir
          </MiniNavLink>
          <MiniNavLink to="/searchEje">Buscar</MiniNavLink>
        </Titulo>
        <Navigation></Navigation>
      </HeaderContainer>

      <Container>
        <NavbarPeque>
          <NavLinkPeque
            style={{
              marginLeft: "-100px",
              
            }}
            
            to="/flaco"
          >
            Bajo
          </NavLinkPeque>
          <NavLinkPeque  to="/estable">
            Estable
          </NavLinkPeque>
          <NavLinkPeque  to="/gordo">
            Obeso
          </NavLinkPeque>
        </NavbarPeque>
      </Container>

      <div>
        <Rutine
          style={{
            marginTop: "20px",
          }}
        >
          Rutinas
        </Rutine>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        
        <StyledCarousel
          controls={false}
          interval={3000}
          style={{
            margin: "30px",
            
          }}
        >
          {[...Array(Math.ceil(ejercicios.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <CardGroup>
                {ejercicios.slice(index * 4, (index + 1) * 4).map((p:any) => (
                  <Card key={p.id} style={{
                    fontFamily: "Dosis, sans-serif",
                    fontSize: "20px"
                  }}>
                    <Card.Img
                      variant=""
                      src={p.imagen}
                      style={{ width: "400px", height: "270px", margin: '0 auto' }}
                    />
                    <Card.Body style={{ textAlign: "center", margin: '0 auto' }}>
                      <Card.Title style={{ textAlign: "center" }}>
                        {p.ejercicio}
                      </Card.Title>
                    </Card.Body>
                  
                  </Card>
                ))}
              </CardGroup>
            </Carousel.Item>
          ))}
        </StyledCarousel>
        </div>
      </div>
    </>
  );
};
export default Rutinas;
