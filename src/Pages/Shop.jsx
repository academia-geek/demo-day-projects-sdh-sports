import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actionDeleteProductAsyn, actionListproductAsyn } from "../Redux/actions/actionsProducts";
import { HeaderContainer, LinkRutine, MiniNavLink, Navigation, Titulo, StyledButtonMini, StyledOffcanvasContainer } from "../Styles/styled";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsStore);
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, [dispatch]);

  const redirigir = (itemid) => {
    navigate(`/informacion/${itemid}`)
  }


  return (
    <div className="divTable">
      <HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "-40px" }} to="/addPro">
            Añadir
          </MiniNavLink>
          <MiniNavLink style={{
            textDecoration: 'none'
          }}>¡Bienvenido!</MiniNavLink>
          <MiniNavLink onClick={handleShow}>Ver mas</MiniNavLink>
        </Titulo>
        <Navigation></Navigation>
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
              <Card key={p.id} style={{
                backgroundColor: 'gray',
                fontFamily: "Dosis, sans-serif",
                fontSize: "20px"
              }}>
                <Card.Img variant="" src={p.foto} style={{ width: "400px", height: "270px" }} />
                <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ textAlign: "center", margin: '0 auto' }}>{p.name}</Card.Title>
                  <StyledButtonMini onClick={() => redirigir(p.id)}>Detalles</StyledButtonMini>
                </Card.Body>

                {/* <Button
                      onClick={() => dispatch(actionDeleteProductAsyn(p.id))}
                    >
                      X
                    </Button>
                    <Button variant="primary" onClick={() => handleShow(p)}>
                      Edit
                    </Button>  */}
              </Card>
            ))}
        </CardGroup>
      </div>

      <StyledOffcanvasContainer show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Productos SDH Sports</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      Para potenciar tus entrenamientos y promover la recuperación muscular, considera incorporar suplementos de proteínas de alta calidad en tu dieta. <br /> <br />Las proteínas son esenciales para la reparación y el crecimiento muscular, lo que te permite alcanzar tus objetivos de fuerza y resistencia de manera más efectiva. Además de la nutrición adecuada, el equipo de entrenamiento adecuado puede marcar una gran diferencia en tu progreso. <br /> <br />Las mancuernas ofrecen versatilidad y permiten trabajar una variedad de grupos musculares, desde los brazos hasta las piernas, mientras que las máquinas de entrenamiento ofrecen una forma efectiva de realizar ejercicios específicos con una resistencia controlada.

        <div className="offcanvas-links">
          <Link to="#" onClick={() => handleTypeClick(null)}>Todos</Link><br/>
          <Link to="#" onClick={() => handleTypeClick("Proteinas")}>Suplementos de proteínas</Link><br/>
          <Link to="#" onClick={() => handleTypeClick("Mancuernas")}>Mancuernas</Link><br/>
          <Link to="#" onClick={() => handleTypeClick("Maquinas")}>Máquinas de entrenamiento</Link>
        </div>
      </Offcanvas.Body>
    </StyledOffcanvasContainer>
    </div>
  );
};

export default Shop;



