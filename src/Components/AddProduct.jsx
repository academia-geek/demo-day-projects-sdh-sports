import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddproductAsyn } from "../Redux/actions/actionsProducts";
import { FileUpload } from "../Helpers/FileUpload";
import { HeaderContainer, LinkRutine, MiniNavLink, Navigation, Titulo } from "../Styles/styled";

const AddProduct = () => {
  const dispatch = useDispatch();
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
      <HeaderContainer>
        <Navigation>
          <MiniNavLink to="/addPro">Add</MiniNavLink>
        </Navigation>
        <Titulo>
          <LinkRutine to="/shop">Bienvenido!</LinkRutine>
        </Titulo>
        <Navigation>
          
        </Navigation>
      </HeaderContainer>
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
            <option value="Ropa">Ropa</option>
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

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default AddProduct;
