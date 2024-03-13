import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CardsGroup,
  HeaderContainer,
  LinkRutine,
  MiniNavLink,
  Navigation,
  Titulo,
} from "../Styles/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteEjerciciosAsyn,
  actionListEjerciciosAsyn,
} from "../Redux/actions/actionsEjercicios";
import { Card, CardGroup, ListGroup } from "react-bootstrap";

const Desnutrido = () => {
  const dispatch = useDispatch();
  const { ejercicios } = useSelector((store) => store.ejerciciosStore);

  useEffect(() => {
    dispatch(actionListEjerciciosAsyn());
  }, []);

  const ejerciciosFlaco = ejercicios.filter(
    (ejercicio) => ejercicio.type === "Flaco"
  );

  return (
    <>
      <HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "-40px" }} to="/addEje">
            Añadir
          </MiniNavLink>
          <MiniNavLink to="/rutinas">Rutinas</MiniNavLink>
          <MiniNavLink to="/searchEje">Buscar</MiniNavLink>
        </Titulo>
        <Navigation></Navigation>
      </HeaderContainer>

      <div>
        <h2
          style={{
            color: "#12748e",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Bajo Peso
        </h2>
        <CardsGroup>
          {ejerciciosFlaco.map((p) => (
            <Card key={p.id}>
              <Card.Img
                variant=""
                src={p.imagen}
                style={{ width: "400px", height: "270px", margin: "0 auto" }}
              />
              <Card.Body style={{ textAlign: "center", margin: "0 auto" }}>
  
                <Card.Title style={{ textAlign: "center", margin: "0 auto"  }}>
                  {p.ejercicio}
                </Card.Title>

                
                <Card.Text>{p.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Series: {p.series}</ListGroup.Item>
                <ListGroup.Item>Repeticiones: {p.repeticiones}</ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </CardsGroup>
      </div>
    </>
  );
};

export default Desnutrido;
