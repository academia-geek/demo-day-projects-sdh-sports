import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  MiniNavLink,
  Navigation,
  Titulo,
} from "../Styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteEjerciciosAsyn, actionListEjerciciosAsyn } from "../Redux/actions/actionsEjercicios";
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
        <Navigation>
          <MiniNavLink to="/addEje">Add</MiniNavLink>
          <MiniNavLink to="/searchEje">Search</MiniNavLink>
        </Navigation>
        <Titulo>
          <Link to="/rutinas">Rutinas</Link>
        </Titulo>
        <Navigation>
          <MiniNavLink to="/flaco">Bajo Peso</MiniNavLink>
          <MiniNavLink to="/estable">Estable</MiniNavLink>
          <MiniNavLink to="/gordo">Obeso</MiniNavLink>
        </Navigation>
      </HeaderContainer>

      <div>
        <h2 style={{
          color: 'white'
        }}>
          Bajo Peso
        </h2>
        <CardGroup  style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                {ejerciciosFlaco.map((p) => (
                  <Card key={p.id}>
                    <Card.Img
                      variant=""
                      src={p.imagen}
                      style={{ width: "400px", height: "270px"}}
                    />
                    <Card.Body>
                      <Card.Title>{p.ejercicio}</Card.Title>
                      <Card.Text>{p.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Series: {p.series}</ListGroup.Item>
                      <ListGroup.Item>
                        Repeticiones: {p.repeticiones}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                ))}
              </CardGroup>
      </div>
    </>
  );
};

export default Desnutrido;

