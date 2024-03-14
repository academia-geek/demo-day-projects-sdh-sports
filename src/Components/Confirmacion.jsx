import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PaymentConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ConfirmationImage = styled.img`
  width: 500px; 
  height: auto;
  margin-bottom: 2rem;
`;

const BackToHomeButton = styled.button`
  padding: 7px 40px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  width: 500px;

  &:hover {
    background-color: #2ecc71;
  }
`;

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