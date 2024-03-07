import React, { useState } from 'react';
import { calcularIMC } from '../Redux/actions/imcActions';

const Imc = ({ resultadoIMC, calcularIMC }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleCalcularIMC = () => {
    calcularIMC(altura, peso);
  };

  return (
    <div>
      <h1>Calculadora de Índice de Masa Corporal (IMC)</h1>
      <div>
        <label htmlFor="altura">Altura (en cm):</label>
        <input type="number" step="0.01" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label htmlFor="peso">Peso (en kg):</label>
        <input type="number" step="0.01" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={handleCalcularIMC}>Calcular IMC</button>
      <div>{resultadoIMC}</div>
    </div>
  );
};


export default Imc;
