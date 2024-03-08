import { addDoc, collection, } from 'firebase/firestore';
import { dataBase } from '../../Firebase/firebaseConfig';
import { typesImc } from "../types/types";


export const actionCalcularimcAsync:any = (payload:any) => {
  return async (dispatch:any) => {
    console.log("Dentro del IMC")
    await addDoc(collection(dataBase, "IMC"), payload)
      .then((resp) => {
        dispatch(actionCalcularimcSync(payload));
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
    };
  };
  export const actionCalcularimcSync = (payload:any) => {
    return {
      type: typesImc.add,
      payload,
    };
  };
 