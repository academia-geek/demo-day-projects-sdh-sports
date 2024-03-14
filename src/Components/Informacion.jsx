import React, { useEffect, useState } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import {
  HeaderContainer,
  MiniNavLink,
  Navigation,
  StyledOffcanvasContainer,
  Titulo,
} from "../Styles/styled";

const Informacion = () => {
  const { products } = useSelector((store) => store.productsStore);
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);
  const { itemid } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(itemid));
    setSelectedProduct(product);
  }, [products, itemid]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = () => {
    const existingProductIndex = cart.findIndex((product) => product.id === selectedProduct.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Si el producto no está en el carrito, lo añadimos
      const updatedCart = [...cart, { ...selectedProduct, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    navigate('/carrito');
  };
  if (!selectedProduct) {
    return <div>Error!</div>; 
  }
  

  return (
    <div className="divTable">
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

      <Card.Body
        style={{
          color: "white",
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: "20px",
          marginTop: "40px",
          marginBottom: '80px'
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "400px", height: "auto" }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Imagen",
                  isFluidWidth: true,
                  src: selectedProduct.foto,
                  width: 30,
                 
                },
                largeImage: {
                  src: selectedProduct.foto,
                  width: 900,
                  height: 800,
                },
              }}
            />
          </div>
        </div>

        <div>
          <Card.Title style={{
            fontFamily: 'Archivo Black, sans-serif',
            fontSize: '34px',
            color: "gold",
            fontWeight: 'bold'
          }}>{selectedProduct.name}</Card.Title>
          <div style={{
            fontFamily: 'Dosis, sans-serif',
            fontSize: '20px',
            marginRight: '30px',
            marginTop: '20px',
            
          }}>

          <Card.Text style={{
            fontWeight: 'bold'
          }}>${selectedProduct.price}</Card.Text>
          <Card.Text style={{
             marginRight: '140px',
          }}>{selectedProduct.description}</Card.Text>
          <Card.Text>Tipo: <span> {selectedProduct.type} </span></Card.Text>
          <Button onClick={addToCart}>Añadir al carrito</Button>
          </div>
        </div>
      </Card.Body>

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
    </div>
  );
};

export default Informacion;
