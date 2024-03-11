import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactImageMagnify from  'react-image-magnify'; 

const Informacion = () => {
  const { products } = useSelector((store) => store.productsStore);
  const { itemid } = useParams(); // Obtener el ID del producto de la URL
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
       
    </div>
  );
};

export default Informacion;
