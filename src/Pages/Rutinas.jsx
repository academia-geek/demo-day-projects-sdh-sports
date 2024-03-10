import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LinkRutine,
  MiniNavLink,
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

  const ejerciciosFlaco = ejercicios.filter(
    (ejercicio) => ejercicio.type === "Flaco"
  );
  const ejerciciosEstable = ejercicios.filter(
    (ejercicio) => ejercicio.type === "Estable"
  );
  const ejerciciosGordo = ejercicios.filter(
    (ejercicio) => ejercicio.type === "Gordo"
  );

  return (
    <>
      <HeaderContainer>
        <Navigation>
          <MiniNavLink to="/addEje">Add</MiniNavLink>
          <MiniNavLink to="/searchEje">Search</MiniNavLink>
        </Navigation>
        <Titulo>
          <LinkRutine to="/rutinas">Rutines</LinkRutine>
        </Titulo>
        <Navigation>
          <MiniNavLink to="/flaco">Bajo Peso</MiniNavLink>
          <MiniNavLink to="/estable">Estable</MiniNavLink>
          <MiniNavLink to="/gordo">Obeso</MiniNavLink>
        </Navigation>
      </HeaderContainer>

      <div>
      <Link style={{
          textDecoration: 'none'
        }} to="/flaco">
        <Rutine style={{
          marginTop: '20px'
        }}>
          Bajo Peso
        </Rutine>
        </Link>
        <StyledCarousel
          controls={false} 
          interval={3000}
          style={{
            margin: '30px'
          }}
        >
          {[...Array(Math.ceil(ejerciciosFlaco.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <CardGroup>
                {ejerciciosFlaco.slice(index * 4, (index + 1) * 4).map((p) => (
                  <Card key={p.id}>
                    <Card.Img
                      variant=""
                      src={p.imagen}
                      style={{ width: "400px", height: "270px" }}
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

      <div>
      <Link style={{
          textDecoration: 'none'
        }} to="/estable">
        <Rutine>
          Estable
        </Rutine>
        </Link>
        <StyledCarousel
          controls={false} 
          interval={3000}
          style={{
            margin: '30px'
          }}
        >
          {[...Array(Math.ceil(ejerciciosEstable.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <CardGroup>
                {ejerciciosEstable.slice(index * 4, (index + 1) * 4).map((p) => (
                  <Card key={p.id}>
                    <Card.Img
                      variant=""
                      src={p.imagen}
                      style={{ width: "400px", height: "270px" }}
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
      <div>
      <Link style={{
          textDecoration: 'none'
        }} to="/gordo">
        <Rutine>
          Obeso
        </Rutine>
        </Link>
        <StyledCarousel
          controls={false} 
          interval={3000}
          style={{
            margin: '30px'
          }}
        >
          {[...Array(Math.ceil(ejerciciosGordo.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <CardGroup>
                {ejerciciosGordo.slice(index * 4, (index + 1) * 4).map((p) => (
                  <Card key={p.id}>
                    <Card.Img
                      variant=""
                      src={p.imagen}
                      style={{ width: "400px", height: "270px" }}
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

{/* <Modal show={show} onHide={handleClose}>
  <Button>Hola</Button>
  <Modal.Header closeButton>
    <Modal.Title>Editar {selectData?.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {show && selectData !== "undefined" && (
      <EditEjercicio datos={selectData} handleClose={handleClose} />
    )}
  </Modal.Body>
  <Modal.Footer />
</Modal> */}