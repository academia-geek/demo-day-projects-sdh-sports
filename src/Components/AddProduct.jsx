import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { actionAddproductAsyn } from "../Redux/actions/actionsProducts";
import { FileUpload } from "../Helpers/FileUpload";
import { HeaderContainer, LinkRutine, MiniNavLink,StyledButtonMini, Navigation, Titulo,FormContainer, BackgroundContainer4, StyledOffcanvasContainer } from "../Styles/styled";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTypeClick = (type) => setSelectedType(type);

  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    price: "",
    des: "",
    foto: " ",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      name: formValue.name,
      price: formValue.price,
      description: formValue.des,
      foto: formValue.foto,
      type: formValue.type,
    };
    dispatch(actionAddproductAsyn(obj));
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.foto = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd">
      <BackgroundContainer4>

      <HeaderContainer>
        <Navigation></Navigation>
        <Titulo>
          <MiniNavLink style={{ marginLeft: "-40px" }} to="/addPro">
            Añadir
          </MiniNavLink>
          <MiniNavLink to='/shop'>Tienda</MiniNavLink>
         <MiniNavLink onClick={handleShow}>Ver mas</MiniNavLink>
        </Titulo>
        <Navigation></Navigation>
      </HeaderContainer>
      <FormContainer>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextname">
          <Form.Label column sm="2">
            Nombre Producto
          </Form.Label>

          <Form.Control
            placeholder="Mancuernas..."
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Precio
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="89.000"
            name="price"
            value={formValue.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Descripcion
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Te pueden ayudar para..."
            name="des"
            value={formValue.des}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div>
          <label htmlFor="sexo">Tipo:</label>
          <Form.Select
            name="type"
            value={formValue.type}
            onChange={handleInputChange}
          >
            <option value="">Seleccionar</option>
            <option value="Proteinas">Proteinas</option>
            <option value="Mancuernas">Mancuernas</option>
            <option value="Maquinas">Maquinas</option>
          </Form.Select>
        </div>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Imagen
          </Form.Label>

          <Form.Control
            type="file"
            name="foto"
            accept=".jpg, .png, .webp"
            placeholder="Ingrese Foto"
            onChange={handleFileChange}
          />
        </Form.Group>

        <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"}}>
            <StyledButtonMini type="submit">Agregar</StyledButtonMini>
          </div>
      </Form>

      </FormContainer>



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

      </BackgroundContainer4>
    </div>
  );
};

export default AddProduct;
