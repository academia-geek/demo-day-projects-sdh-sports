import React, { useState } from "react";
import { actionCalcularimcAsync } from "../Redux/actions/imcActions";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

import { CloseButton, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalTitle, ModalWrapper, BackgroundContainer } from "../Styles/styled";



const Imc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, handleInputChange, reset] = useForm({
    alt: "",
    pes: "",
    eda: "",
    sex: "",
    
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
    

    
  }
  const handleAccept = () => {
    handleClose(); // Cierra el modal
  
    if (imc >= 29.9) {
      redirigirGordo();
    } else if (imc >= 25.9 && imc < 29.9) {
      redirigirEstable();
    } else if (imc >= 10 && imc < 25.9) {
      redirigirFlaco();
    }
  };
  return (
    <div  >
      <BackgroundContainer>

      <h1 style={{
        margin: '0 auto',
        textAlign: "center", 
        color: 'white'
      }}>
        Calculadora de Índice de Masa Corporal (IMC)</h1>
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0', 
        color: 'white'
      }}>


      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="altura">Altura (en cm):</label>
          <Form.Control style={{"width":"125px"}}
            type="number"
            placeholder="Altura"
            name="alt"
            value={formValue.alt}
            onChange={handleInputChange}
            />
        </div>
        <div>
          <label htmlFor="peso">Peso (en kg):</label>
          <Form.Control style={{"width":"125px"}}
            type="number"
            placeholder="Peso"
            name="pes"
            value={formValue.pes}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="eda">Edad:</label>
          <Form.Control style={{"width":"125px"}}
            type="number"
            placeholder="Edad"
            name="eda"
            value={formValue.eda}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="sexo">Sexo:</label>
          <Form.Select style={{"width":"125px"}}
            name="sex"
            value={formValue.sex}
            onChange={handleInputChange}
            >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </Form.Select> <br />
        </div>
        <Button variant="primary" onClick={handleShow}>
        Calcular IMC
      </Button>
        
      </Form>
      </div>
      {show && (
  <ModalWrapper>
    <ModalContent>
      <ModalHeader>
        <ModalTitle>Tu IMC actual es de</ModalTitle>
        <CloseButton onClick={handleClose}>x</CloseButton>
      </ModalHeader>
      <ModalBody>
        <p> {imc}</p>
        {imc >= 29.9 && <p>Tu rutina recomendada es para bajar de peso.</p>}
        {imc >= 25.9 && imc < 29.9 && (
          <p>Tu rutina recomendada es para mantener un peso saludable.</p>
        )}
        {imc >= 10 && imc < 25.9 && (
          <p>Tu rutina recomendada es para subir de peso.</p>

        )}
            <p>Presiona aceptar para dirigirte a tu rutina..</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAccept}>
          Aceptar
        </Button>
      </ModalFooter>
    </ModalContent>
  </ModalWrapper>
)}
</BackgroundContainer>
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