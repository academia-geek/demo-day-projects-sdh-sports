import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardImage, CardImageContainer, CardImages, CardTypeSelect, CvvField, ExpiryContainer, ExpiryCvvContainer, InputField, PaymentForm, PaymentFormContainer, PaysButton } from '../Styles/styled';



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
        <PaysButton type='submit' disabled={!formIsValid}>
          Pagar
        </PaysButton>
        </Link>
      </PaymentForm>
    </PaymentFormContainer>
  );
};

export default Pasarela;