import React, { useState } from 'react';
import { actionCalcularimcAsync } from '../Redux/actions/imcActions';
import { useDispatch } from 'react-redux';
import useForm from '../Hooks/useForm';

const Imc = ({ resultadoIMC, calcularIMC }) => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    altura: "",
    peso: "",
  });

  const { altura, peso } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionCalcularimcAsync(altura, peso));
    reset();
  };

  const handleCalcularIMC = () => {
    calcularIMC(altura, peso);
  };

  return (
    <div>
      <h1>Calculadora de Índice de Masa Corporal (IMC)</h1>
      <div>
        <label htmlFor="altura">Altura (en cm):</label>
        <input type="number" step="0.01" id="altura" value={altura} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="peso">Peso (en kg):</label>
        <input type="number" step="0.01" id="peso" value={peso} onChange={handleInputChange}/>
      </div>
      <button onClick={handleCalcularIMC}>Calcular IMC</button>
      <div>{resultadoIMC}</div>
    </div>
  );
};


export default Imc;
