import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  const { ejercicios } = useSelector((store) => store.ejerciciosStore);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionListEjerciciosAsyn());
  }, []);

  // const ejerciciosFlaco = ejercicios.filter(
  //   (ejercicio) => ejercicio.type === "Flaco"
  // );
  // const ejerciciosEstable = ejercicios.filter(
  //   (ejercicio) => ejercicio.type === "Estable"
  // );
  // const ejerciciosGordo = ejercicios.filter(
  //   (ejercicio) => ejercicio.type === "Gordo"
  // );

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
            navigate
            to="/flaco"
          >
            Bajo
          </NavLinkPeque>
          <NavLinkPeque navigate to="/estable">
            Estable
          </NavLinkPeque>
          <NavLinkPeque navigate to="/gordo">
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
                {ejercicios.slice(index * 4, (index + 1) * 4).map((p) => (
                  <Card key={p.id}>
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
                    {/* <Button
                      onClick={() => dispatch(actionDeleteEjerciciosAsyn(p.id))}
                    >
                      X
                    </Button>
                    <Button variant="primary" onClick={() => handleShow(p)}>
                      Edit
                    </Button> */}
                  </Card>
                ))}
              </CardGroup>
            </Carousel.Item>
          ))}
        </StyledCarousel>
      </div>
    </>
  );
};
export default Rutinas;
