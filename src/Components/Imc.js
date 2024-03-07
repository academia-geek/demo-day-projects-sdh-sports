import React, { useState } from "react";
import { dataBase } from "../Firebase/firebaseConfig";


const Imc = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultadoIMC, setResultadoIMC] = useState('');
  
    const calcularIMC = () => {
      const alturaFloat = parseFloat(altura);
      const pesoFloat = parseFloat(peso);
  
      if (!isNaN(alturaFloat) && !isNaN(pesoFloat)) {
        const imc = pesoFloat / (alturaFloat * alturaFloat);
        setResultadoIMC(`Tu IMC es: ${imc.toFixed(2)}`);
  
        // Guardar datos en Firestore
        const id = Math.random().toString(36).substring(7);
        const fecha = new Date().toISOString();
  
        dataBase.collection('imcData').doc(id).set({
          id: id,
          altura: alturaFloat,
          peso: pesoFloat,
          imc: imc,
          fecha: fecha
        })
        .then(() => {
          console.log("Datos guardados en Firestore");
        })
        .catch((error) => {
          console.error("Error al guardar los datos: ", error);
        });
      } else {
        alert('Por favor ingresa tu altura y peso.');
      }
    };
  
    return (
      <div>
        <h1>Calculadora de Índice de Masa Corporal (IMC)</h1>
        <div>
          <label htmlFor="altura">Altura (en metros):</label>
          <input type="number" step="0.01" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label htmlFor="peso">Peso (en kg):</label>
          <input type="number" step="0.01" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        <div>{resultadoIMC}</div>
      </div>
    );
  }
  
  export default Imc;