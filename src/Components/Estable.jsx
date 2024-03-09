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
import { actionListEjerciciosAsyn } from "../Redux/actions/actionsEjercicios";
import { Card, CardGroup } from "react-bootstrap";

const Estable = () => {
  const dispatch = useDispatch();
  const { ejercicios } = useSelector((store) => store.ejerciciosStore);

  useEffect(() => {
    dispatch(actionListEjerciciosAsyn());
  }, []);

  const ejerciciosEstable = ejercicios.filter(
    (ejercicio) => ejercicio.type === "Estable"
  );
 

  return (
    <>
      <HeaderContainer>
        <Navigation>
          <MiniNavLink to="/addEje">Add</MiniNavLink>
          <MiniNavLink to="">Search</MiniNavLink>
        </Navigation>
        <Titulo>
          <Link to="/rutinas">Rutinas</Link>
        </Titulo>
        <Navigation>
          <MiniNavLink to="/flaco">Flaco</MiniNavLink>
          <MiniNavLink to="/estable">Estable</MiniNavLink>
          <MiniNavLink to="/gordo">Gordo</MiniNavLink>
        </Navigation>
      </HeaderContainer>

     

      <div>
      <h2 style={{
        color: 'white'
      }}>Estable</h2>
        <CardGroup>
          {ejerciciosEstable.map((p) => (
            <Card
              style={{ width: "300px", height: "440px", textAlign: "center" }}
              key={p.id}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card.Img
                  variant=""
                  src={p.imagen}
                  style={{ width: "560px", height: "370px" }}
                />
              </div>

              <Card.Body>
                {/* <Card.Title>{p.name}</Card.Title> */}
                <Card.Text>{p.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
     
    </>
  );
};

export default Estable;
