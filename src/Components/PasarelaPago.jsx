import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardImages = {
  visa: 'https://res.cloudinary.com/sdhsports/image/upload/v1710387212/SDH/Visa_qskup4.webp',
  mastercard: 'https://res.cloudinary.com/sdhsports/image/upload/v1710387223/SDH/mastercard_dn9jvn.jpg',
  american: 'https://res.cloudinary.com/sdhsports/image/upload/v1710387222/SDH/american_fcwmoo.avif',
};

const CardTypeSelect = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat, repeat;
  background-position: right 0.75rem center;
  background-size: 12px 12px;
  `
const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ExpiryCvvContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

const ExpiryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48%;
`;

const CvvField = styled(InputField)`
  width: 22%;
`;

const PayButton = styled.button`
  padding: 10px 50px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#27ae60')};
  color: ${(props) => (props.disabled ? 'white' : '#fff')};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
`;

const CardImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 80px;
  height: 55px;
  margin-right: 1rem;
`;

const Pasarela = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState('visa');

  const [formIsValid, setFormIsValid] = useState(false);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
    setFormIsValid(checkFormValidity());
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
    setFormIsValid(checkFormValidity());
  };

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
    setFormIsValid(checkFormValidity());
  };

  const handleExpiryYearChange = (e) => {
    setExpiryYear(e.target.value);
    setFormIsValid(checkFormValidity());
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
    setFormIsValid(checkFormValidity());
  };

  const checkFormValidity = () => {
    return (
      cardNumber.trim() !== '' &&
      cardName.trim() !== '' &&
      expiryMonth.trim() !== '' &&
      expiryYear.trim() !== '' &&
      cvv.trim() !== ''
    );
  };
  useEffect(() => {
    setFormIsValid(checkFormValidity());
  }, [cardNumber, cardName, expiryMonth, expiryYear, cvv]);


  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      cardNumber,
      cardName,
      expiryMonth,
      expiryYear,
      cvv,
      cardType,
    });
   
  };

  return (
    <PaymentFormContainer>
      <PaymentForm onSubmit={handleSubmit}>
        <CardImageContainer>
          <CardImage src={CardImages[cardType]} alt={cardType} />
          <CardTypeSelect value={cardType} onChange={handleCardTypeChange}>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="american">American Express</option>
          </CardTypeSelect>
        </CardImageContainer>
        <InputField
          type="text"
          placeholder="Número de tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Nombre en la tarjeta"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <ExpiryCvvContainer>
          <ExpiryContainer>
            <InputField
              type="text"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
            <InputField
              type="text"
              placeholder="YY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </ExpiryContainer>
          <CvvField
            type="text"
            placeholder="CVC"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </ExpiryCvvContainer>
        <Link to= '/confirmacion'>
        <PayButton type='submit' disabled={!formIsValid}>
          Pagar
        </PayButton>
        </Link>
      </PaymentForm>
    </PaymentFormContainer>
  );
};

export default Pasarela;