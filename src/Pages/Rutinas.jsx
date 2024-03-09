import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  MiniNavLink,
  Navigation,
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
          <Link to="/rutinas">Rutinas</Link>
        </Titulo>
        <Navigation>
          <MiniNavLink to="/flaco">Flaco</MiniNavLink>
          <MiniNavLink to="/estable">Estable</MiniNavLink>
          <MiniNavLink to="/gordo">Gordo</MiniNavLink>
        </Navigation>
      </HeaderContainer>

      <div>
        <h2>
          <Link to="/flaco">Flaco</Link>
        </h2>
        <Carousel
          controls={false} 
          interval={3000}
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
                    <Button
                      onClick={() => dispatch(actionDeleteEjerciciosAsyn(p.id))}
                    >
                      X
                    </Button>
                    <Button variant="primary" onClick={() => handleShow(p)}>
                      Edit
                    </Button>
                  </Card>
                ))}
              </CardGroup>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div>
        <h2>
          <Link to="/estable">Estable</Link>
        </h2>
        <CardGroup>
          {ejerciciosEstable.map((p) => (
            <Card key={p.id}>
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
                <Card.Text>{p.description}</Card.Text>
              </Card.Body>
              <Button
                onClick={() => dispatch(actionDeleteEjerciciosAsyn(p.id))}
              >
                X
              </Button>
              <Button variant="primary" onClick={() => handleShow(p)}>
                Edit
              </Button>
            </Card>
          ))}
        </CardGroup>
      </div>
      <div>
        <h2>
          <Link to="/gordo">Gordo</Link>
        </h2>
        <CardGroup>
          {ejerciciosGordo.map((p) => (
            <Card key={p.id}>
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
                <Card.Text>{p.description}</Card.Text>
              </Card.Body>
              <Button
                onClick={() => dispatch(actionDeleteEjerciciosAsyn(p.id))}
              >
                X
              </Button>
              <Button variant="primary" onClick={() => handleShow(p)}>
                Edit
              </Button>
            </Card>
          ))}
        </CardGroup>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar {selectData?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {show && selectData !== "undefined" && (
              <EditEjercicio datos={selectData} handleClose={handleClose} />
            )}
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    </>
  );
};
export default Rutinas;
