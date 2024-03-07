import { Dispatch } from 'redux';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from '../../Firebase/firebaseConfig';

export const actionCalcularimcAsync = (altura: string, peso: string) => {
  return async (dispatch: any) => {
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    if (!isNaN(alturaFloat) && !isNaN(pesoFloat)) {
      const imc = pesoFloat / (alturaFloat * alturaFloat);
      dispatch({ type: 'CALCULAR_IMC', payload: imc });

      const id = Math.random().toString(36).substring(7);
      const fecha = new Date().toISOString();

      try {
        await addDoc(collection(dataBase, 'imcData'), {
          id: id,
          altura: alturaFloat,
          peso: pesoFloat,
          imc: imc,
          fecha: fecha
        });
        console.log('Datos guardados en Firestore');
      } catch (error) {
        console.error('Error al guardar los datos: ', error);
      }
    } else {
      alert('Por favor ingresa tu altura y peso.');
    }
  };
};
