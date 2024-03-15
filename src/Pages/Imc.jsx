import React, { useState } from "react";
import { actionCalcularimcAsync } from "../Redux/actions/imcActions";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

import { CloseButton, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalTitle, 
  ModalWrapper, 
  BackgroundContainer,
   StyledButton2, 
   Title,
    FormContainer,
     LabelForm,
    StyledButtonMini,
  StyledButtonCerrar } from "../Styles/styled";



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
  
    if (imc >= 25) {
      redirigirGordo();
    } else if (imc >= 18.5 && imc < 25 ) {
      redirigirEstable();
    } else if (imc < 18.5) {
      redirigirFlaco();
    }
  };
  return (
    <div  >
      <BackgroundContainer>

      <Title style={{
        margin: '0 auto',
        textAlign: "center", 
        color:"white"
      }}>
        Calculadora de Índice de Masa Corporal (IMC)</Title>
  <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <LabelForm htmlFor="altura" >Altura (en cm):</LabelForm>
          <Form.Control style={{"width":"125px",
                  fontFamily: "Dosis, sans-serif",
                  fontSize: "20px"
        }}
            type="number"
            placeholder="Altura"
            name="alt"
            value={formValue.alt}
            onChange={handleInputChange}
            />
        </div>
        <div>
          <label htmlFor="peso">Peso (en kg):</label>
          <Form.Control style={{"width":"125px",
          fontFamily: "Dosis, sans-serif",
          fontSize: "20px"}}
            type="number"
            placeholder="Peso"
            name="pes"
            value={formValue.pes}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="eda">Edad:</label>
          <Form.Control style={{"width":"125px",
            fontFamily: "Dosis, sans-serif",
            fontSize: "20px"}}
            type="number"
            placeholder="Edad"
            name="eda"
            value={formValue.eda}
            onChange={handleInputChange}
            />
        </div>

        <div>
          <label htmlFor="sexo">Sexo:</label>
          <Form.Select style={{"width":"125px",
          fontFamily: "Dosis, sans-serif",
          fontSize: "20px"}}
            name="sex"
            value={formValue.sex}
            onChange={handleInputChange}
            >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </Form.Select> <br />
        </div>
        
      </Form>

      {/* </div> */}

      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"}}>
      <StyledButton2 variant="primary" onClick={handleShow}>
        Calcular IMC
      </StyledButton2>
      </div>
      </FormContainer>

      {show && (
  <ModalWrapper>
    <ModalContent>
      <ModalHeader>
        <ModalTitle>Tu IMC actual es de</ModalTitle>
        <CloseButton onClick={handleClose} style={{color:"white"}}>x</CloseButton>
      </ModalHeader>
      <ModalBody>
      <p> {imc}</p>
        {imc >= 25 && <p>Tu rutina recomendada es para bajar de peso. <br />RUTINA: SOBRE PESO</p>}
        {imc >= 18.5 && imc < 25 && (
          <p>Tu rutina recomendada es para mantener un peso saludable. <br />RUTINA: ESTABLE</p>
        )}
        {imc < 18.5 && (
          <p>Tu rutina recomendada es para subir de peso. <br />RUTINA: BAJO PESO</p>

        )}
            <p>Presiona aceptar para dirigirte a tu rutina..</p>
      </ModalBody>
      <ModalFooter>
        <StyledButtonCerrar variant="secondary" onClick={handleClose}>
          Cerrar
        </StyledButtonCerrar>
        <StyledButtonMini variant="primary" onClick={handleAccept}>
          Aceptar
        </StyledButtonMini>
      </ModalFooter>
    </ModalContent>
  </ModalWrapper>
)}
</BackgroundContainer>
    </div>
    
    );
    
  };
  
  export default Imc;

  