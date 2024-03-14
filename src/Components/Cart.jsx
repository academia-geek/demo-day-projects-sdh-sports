import React, { useEffect, useState } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import {
  CartContainer,
  CartTitle,
  CartWrapper,
  HeaderContainer,
  MiniNavLink,
  Navigation,
  PayButton,
  PayLink,
  ProductCard,
  ProductText,
  ProductTitle,
  RemoveButton,
  StyledOffcanvasContainer,
  Titulo,
} from "../Styles/styled";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "0px" }} to="/addPro">
            Añadir
          </MiniNavLink>
          <MiniNavLink to="/shop">Tienda</MiniNavLink>
          <MiniNavLink onClick={handleShow}>Ver mas</MiniNavLink>
        </Titulo>
        <Navigation>
          <Link to="/carrito">
            <img
              style={{
                width: "60px",
              }}
              src="https://res.cloudinary.com/sdhsports/image/upload/v1710381722/SDH/3361585_md93wn.png"
              alt=""
            />
          </Link>
        </Navigation>
      </HeaderContainer>

      <CartTitle>Carrito de Compras</CartTitle>
      <CartContainer>
        <CartWrapper>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <ProductCard key={index}>
                <Card.Img
                  variant="top"
                  src={product.foto}
                  alt={product.name}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <Card.Body style={{ padding: "10px" }}>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductText>${product.price}</ProductText>
                  <RemoveButton
                    variant="danger"
                    onClick={() => removeFromCart(index)}
                  >
                    X
                  </RemoveButton>
                </Card.Body>
              </ProductCard>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </CartWrapper>
      </CartContainer>
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

          <PayLink to="/pasarela">
            <PayButton variant="success">Pagar</PayButton>
          </PayLink>
      </div>

      <StyledOffcanvasContainer
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos SDH Sports</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Para potenciar tus entrenamientos y promover la recuperación muscular,
          considera incorporar suplementos de proteínas de alta calidad en tu
          dieta. <br /> <br />
          Las proteínas son esenciales para la reparación y el crecimiento
          muscular, lo que te permite alcanzar tus objetivos de fuerza y
          resistencia de manera más efectiva. Además de la nutrición adecuada,
          el equipo de entrenamiento adecuado puede marcar una gran diferencia
          en tu progreso. <br /> <br />
          Las mancuernas ofrecen versatilidad y permiten trabajar una variedad
          de grupos musculares, desde los brazos hasta las piernas, mientras que
          las máquinas de entrenamiento ofrecen una forma efectiva de realizar
          ejercicios específicos con una resistencia controlada.
          <div className="offcanvas-links">
            <Link to="#" onClick={() => handleTypeClick(null)}>
              Todos
            </Link>
            <br />
            <Link to="#" onClick={() => handleTypeClick("Proteinas")}>
              Suplementos de proteínas
            </Link>
            <br />
            <Link to="#" onClick={() => handleTypeClick("Mancuernas")}>
              Mancuernas
            </Link>
            <br />
            <Link to="#" onClick={() => handleTypeClick("Maquinas")}>
              Máquinas de entrenamiento
            </Link>
          </div>
        </Offcanvas.Body>
      </StyledOffcanvasContainer>
    </>
  );
};

export default Cart;
