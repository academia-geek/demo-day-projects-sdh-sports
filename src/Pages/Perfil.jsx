import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddperfilAsyn } from "../Redux/actions/actionsPerfil";
import { FileUpload } from "../Helpers/FileUpload";
import { Title } from "../Styles/styled";

const Perfil = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    phone: "",
    genre: "",
    fotop: " ",
  });
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentData({ ...parsedData, fotop: decodeURIComponent(parsedData.fotop) });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      name: formValue.name,
      phone: formValue.phone,
      genre: formValue.genre,
      fotop: formValue.fotop,
    };
    dispatch(actionAddperfilAsyn(obj));
    localStorage.setItem('userData', JSON.stringify({ ...obj, fotop: encodeURIComponent(obj.fotop) }));
    setCurrentData(obj);
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.fotop = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextname">
          <Form.Label column sm="2">
            Nombre Completo
          </Form.Label>

          <Form.Control
            placeholder="user_name"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            phone
          </Form.Label>

          <Form.Control
            type="number"
            placeholder="Phone"
            name="phone"
            value={formValue.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            genre
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="genre"
            name="genre"
            value={formValue.genre}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Foto de Perfil
          </Form.Label>

          <Form.Control
            type="file"
            name="fotop"
            accept=".jpg, .png, .webp"
            placeholder="Ingrese Foto de perfil"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>

      <Title>Tus datos actuales son</Title>
      <div>
  {Object.keys(currentData).length > 0 && (
    <div style={{color: "white"}}>
      <h2>Tus datos actuales son:</h2>
      <p>Nombre: {currentData.name}</p>
      <p>Teléfono: {currentData.phone}</p>
      <p>Género: {currentData.genre}</p>
      <img src={currentData.fotop} alt="Foto de perfil" style={{
          maxWidth: '200px', 
          maxHeight: '200px', 
          objectFit: 'contain', 
        }} />
    </div>
  )}
</div>
      
    </div>
  );
};

export default Perfil;
