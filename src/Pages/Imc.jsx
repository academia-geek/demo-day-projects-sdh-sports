import React, { useState } from "react";
import { actionCalcularimcAsync } from "../Redux/actions/imcActions";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

const Imc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, handleInputChange, reset] = useForm({
    alt: "",
    pes: "",
    eda: "",
    sex: "",
    
  });
  
  const redirigirGordo = () => {
    navigate(`/gordo`);
    
  }
  const redirigirEstable = () => {
    navigate(`/estable`);
    
  }
  const redirigirFlaco = () => {
    navigate(`/flaco`);
   
  }
  
  const alturaMetros = formValue.alt / 100;
  const imc = (formValue.pes / (alturaMetros * alturaMetros)).toFixed(2);


  const handleSubmit = (e) => {
    e.preventDefault();

   

    const obj = {
      id: Math.floor(Math.random() * 200),
      altura: formValue.alt,
      peso: formValue.pes,
      edad: formValue.eda,
      sexo: formValue.sex,
      imc: imc,
    };
    dispatch(actionCalcularimcAsync(obj));
    reset();
    
    if (imc >= 29.9){
      console.log("dentro gordo")
      redirigirGordo()
    }else if(imc >= 25.9  && imc < 29.9){
      console.log("dentro estable")
      redirigirEstable()
    }else if(imc >= 10 && imc < 25.9){
      console.log("dentro flaco")
      redirigirFlaco()
    }
    
  }
  return (
    <div>
      <h1>Calculadora de Índice de Masa Corporal (IMC)</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="altura">Altura (en cm):</label>
          <Form.Control
            type="number"
            placeholder="Altura"
            name="alt"
            value={formValue.alt}
            onChange={handleInputChange}
            />
        </div>
        <div>
          <label htmlFor="peso">Peso (en kg):</label>
          <Form.Control
            type="number"
            placeholder="Peso"
            name="pes"
            value={formValue.pes}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="eda">Edad:</label>
          <Form.Control
            type="number"
            placeholder="Edad"
            name="eda"
            value={formValue.eda}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="sexo">Sexo:</label>
          <Form.Select
            name="sex"
            value={formValue.sex}
            onChange={handleInputChange}
            >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </Form.Select>
        </div>
        <p> Tu imc es de {imc} </p>
        <button type="submit">Calcular IMC</button>
        
      </Form>

    </div>
    
    );
    
  };
  
  export default Imc;

  // const [showModal, setShowModal] = useState(false); 

  
  // const handleClose = () => setShowModal(false);
  
  // const handleShow = () => {
    //   setShowModal(true);
    //   console.log("Dentro del showmodal ", showModal);
    // };
    
    
    {/* Modal */}
    {/* <Modal show={showModal} onHide={handleShow}>
    
  <Modal.Header closeButton>
  <Modal.Title>Hola</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  ¡Hola! Este es un mensaje de ejemplo que se muestra en el modal.
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={() => setShowModal(handleClose)}>
  Cerrar
  </Button>
  </Modal.Footer>
</Modal> */}