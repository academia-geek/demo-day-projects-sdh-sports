import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddEjerciciosAsyn } from "../Redux/actions/actionsEjercicios";
import { FileUpload } from "../Helpers/FileUpload";
import { HeaderContainer, LinkRutine, MiniNavLink, Navigation, Titulo } from '../Styles/styled';
import { Link } from "react-router-dom";


const AddEjercicio = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    ejer: "",
    rep: "",
    ser: "",
    desc: "",
    img: "",
    typ: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 200),
      ejercicio: formValue.ejer,
      repeticiones: formValue.rep,
      series: formValue.ser,
      description: formValue.desc,
      type: formValue.typ,
      imagen: formValue.img,
    };
    dispatch(actionAddEjerciciosAsyn(obj));
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.img = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd">

<HeaderContainer>
    <Navigation>
    <MiniNavLink to="/addEje">Add</MiniNavLink>
      <MiniNavLink to="/searchEje">Search</MiniNavLink>
    </Navigation>
    <Titulo> <LinkRutine to="/rutinas">Rutines</LinkRutine></Titulo>
    <Navigation>
      <MiniNavLink to="/flaco">Bajo Peso</MiniNavLink>
      <MiniNavLink to="/estable">Estable</MiniNavLink>
      <MiniNavLink to="/gordo">Obeso</MiniNavLink>
    </Navigation>
  </HeaderContainer>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextname">
          <Form.Label column sm="2">
            Ejericicio
          </Form.Label>

          <Form.Control
            placeholder="Sentadillas"
            name="ejer"
            value={formValue.ejer}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Repeticiones
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="15"
            name="rep"
            value={formValue.rep}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Series
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="4"
            name="ser"
            value={formValue.ser}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Description
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="Tendras que hacer..."
            name="desc"
            value={formValue.desc}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div>
          <label htmlFor="sexo">Tipo:</label>
          <Form.Select
            name="typ"
            value={formValue.typ}
            onChange={handleInputChange}
            >
            <option value="">Seleccionar</option>
            <option value="Gordo">Obeso</option>
            <option value="Estable">Estable</option>
            <option value="Flaco">Bajo Peso</option>
          </Form.Select>
        </div>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Imagen
          </Form.Label>

          <Form.Control
            type="file"
            name="img"
            accept=".jpg, .png, .webp"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default AddEjercicio;