import React, { useEffect, useState } from "react";
import { Card, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from  'react-image-magnify'; 
import { HeaderContainer, MiniNavLink, Navigation, StyledOffcanvasContainer, Titulo } from "../Styles/styled";

const Informacion = () => {
  const { products } = useSelector((store) => store.productsStore);
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);
  const { itemid } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    // Encontrar el producto correspondiente al ID en la lista de productos
    const product = products.find((p) => p.id === parseInt(itemid));
    setSelectedProduct(product);
  }, [products, itemid]);

  if (!selectedProduct) {
    return <div>Error!</div>; // Muestra un indicador de que hay error
  }

  return (
    <div className="divTable">

<HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "-40px" }} to="/addPro">
            Añadir
          </MiniNavLink>
          <MiniNavLink to='/shop'>¡Bienvenido!</MiniNavLink>
         <MiniNavLink onClick={handleShow}>Ver mas</MiniNavLink>
        </Titulo>
        <Navigation></Navigation>
      </HeaderContainer>

        <Card.Body  style={{
            color: 'white'
          }} >
          <Card.Title>{selectedProduct.name}</Card.Title>
          <Card.Text >{selectedProduct.price}</Card.Text>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: "Imagen",
        isFluidWidth: true,
        src: selectedProduct.foto,
        width: 50,
      },
      largeImage: {
        src: selectedProduct.foto,
        width: 900,
        height: 800,
      },
    }}
    style={{ maxWidth: '100%', maxHeight: '80vh' }} // Limita el tamaño máximo de la imagen
  />
</div>                
          <Card.Text>{selectedProduct.description}</Card.Text>
          <Card.Text>{selectedProduct.type}</Card.Text>
        </Card.Body>
       

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

export default Informacion;
