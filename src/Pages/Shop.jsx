import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionDeleteProductAsyn, actionListproductAsyn } from "../Redux/actions/actionsProducts";
import { HeaderContainer, LinkRutine, MiniNavLink, Navigation, Titulo } from "../Styles/styled";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, [dispatch]);

  return (
    <div className="divTable">
      <HeaderContainer>
        <Navigation>
          <MiniNavLink to="/addPro">Add</MiniNavLink>
        </Navigation>
        <Titulo>
          <LinkRutine to="/shop">Bienvenido!</LinkRutine>
        </Titulo>
        <Navigation>
          <Button variant="primary" onClick={handleShow} className="me-2">
            Ver más
          </Button>
        </Navigation>
      </HeaderContainer>

      <div>
       
        <CardGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "50px",
            margin: "50px",
          }}
        >
          {products
            .filter((p) => !selectedType || p.type === selectedType)
            .map((p) => (
              <Card key={p.id}>
                <Card.Img variant="" src={p.foto} style={{ width: "400px", height: "270px" }} />
                <Card.Body>
                  <Card.Title>Precio: ${p.price}</Card.Title>
                  <Button>Detalles</Button>
                </Card.Body>

                <Button
                      onClick={() => dispatch(actionDeleteProductAsyn(p.id))}
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

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos SDH Sports</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          La elección de la ropa deportiva adecuada es fundamental para
          cualquier rutina de ejercicios. La ropa deportiva no solo te brinda
          comodidad y libertad de movimiento, sino que también puede mejorar tu
          rendimiento al mantenerte fresco y seco durante tus entrenamientos más
          intensos.<br/> Para potenciar tus entrenamientos y promover la recuperación
          muscular, considera incorporar suplementos de proteínas de alta
          calidad en tu dieta. Las proteínas son esenciales para la reparación y
          el crecimiento muscular, lo que te permite alcanzar tus objetivos de
          fuerza y resistencia de manera más efectiva. Además de la nutrición
          adecuada, el equipo de entrenamiento adecuado puede marcar una gran
          diferencia en tu progreso. <br/>Las mancuernas ofrecen versatilidad y
          permiten trabajar una variedad de grupos musculares, desde los brazos
          hasta las piernas, mientras que las máquinas de entrenamiento ofrecen
          una forma efectiva de realizar ejercicios específicos con una
          resistencia controlada.

          <div>
            <Link to="#" onClick={() => handleTypeClick(null)}>Todos</Link><br/>
            <Link to="#" onClick={() => handleTypeClick("Ropa")}>Ropa deportiva</Link><br/>
            <Link to="#" onClick={() => handleTypeClick("Proteinas")}>Suplementos de proteínas</Link><br/>
            <Link to="#" onClick={() => handleTypeClick("Mancuernas")}>Mancuernas</Link><br/>
            <Link to="#" onClick={() => handleTypeClick("Maquinas")}>Máquinas de entrenamiento</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Shop;

