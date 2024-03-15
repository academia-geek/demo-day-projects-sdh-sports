import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackToHomeButton, ConfirmationImage, PaymentConfirmationContainer } from '../Styles/styled';


const ConfirmacionPago = () => {
    const handleContinueShopping = () => {
        localStorage.removeItem('cart'); // Remover el elemento del localStorage
      };
  return (
    <PaymentConfirmationContainer>
        <h2>Tu pedido llegara muy pronto!</h2>
      <ConfirmationImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710004949/SDH/iedgbgtoua0ttrkw6tab.png" alt="Confirmación de pago" />
      <Link to='/shop'>
      <BackToHomeButton onClick={handleContinueShopping}>
        Seguir Comprando
      </BackToHomeButton>
      </Link>
    </PaymentConfirmationContainer>
  );
};

export default ConfirmacionPago;