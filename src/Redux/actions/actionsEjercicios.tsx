import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { typesEjercicios } from "../types/types";
import { dataBase } from "../../Firebase/firebaseConfig";
// ------------------Listar---------------------
export const actionListEjerciciosAsyn:any = () => {
  const pro:any = [];
  return async (dispatch:any) => {
    const EjerciciosListar = await getDocs(collection(dataBase, "Ejercicio"));
    console.log("respuesta", EjerciciosListar);
    EjerciciosListar.forEach((p) => {
      pro.push({
        ...p.data(),
      });
    });
    console.log("LA LISTA DE FIRESTORE", pro);
    dispatch(actionListEjerciciosSyn(pro));
  };
};

export const actionListEjerciciosSyn = (payload:any) => {
  return {
    type: typesEjercicios.list, 
    payload,
  };
};
// ------------------Agregar---------------------
export const actionAddEjerciciosAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    await addDoc(collection(dataBase, "Ejercicio"), payload)
      .then((resp) => {
        dispatch(actionAddEjerciciosSyn(payload));
        dispatch(actionListEjerciciosAsyn());
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  };
};
export const actionAddEjerciciosSyn = (payload:any) => {
  return {
    type: typesEjercicios.add,
    payload,
  };
};

// ------------------Editar---------------------
export const actionEditEjerciciosAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    let uid = "";
    const EjerciciosListar = collection(dataBase, "Ejercicio");
    const q = query(EjerciciosListar, where("id", "==", payload.id));
    const datosQ = await getDocs(q);
    datosQ.forEach((docu) => {
      uid = docu.id;
    });
    const docRef = doc(dataBase, "Ejercicio", uid);
    await updateDoc(docRef, payload)
      .then((resp) => {
        dispatch(actionEditEjerciciosSyn(payload));
        dispatch(actionListEjerciciosAsyn());
      })
      .catch((error) => console.log(error));
  };
};

export const actionEditEjerciciosSyn = (payload:any) => {
  return {
    type: typesEjercicios.edit,
    payload,
  };
};

// ----------------Eliminar Productos-----------------------

export const actionDeleteEjerciciosAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    const EjerciciosListar = collection(dataBase, "Ejercicio");
    const q = query(EjerciciosListar, where("id", "==", payload));
    const dataQ = await getDocs(q);
    console.log(dataQ);

    dataQ.forEach((docu) => {
      deleteDoc(doc(dataBase, "Ejercicio", docu.id));
    });
    dispatch(actionDeleteEjerciciosSyn(payload));
  };
};

export const actionDeleteEjerciciosSyn = (payload:any) => {
  return {
    type: typesEjercicios.delete,
    payload,
  };
};

// ------------------Search--------------------------
export const actionSearchEjerciciosAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    // llamar a la colleccion para que me de los datos
    const productosCollection = collection(dataBase, "Ejercicio");
    // hacer el filtro por nombre
    const q = query(
      productosCollection,
      where("description", ">=", payload),
      where("description", "<=", payload + '\uf8ff')
    );

    const dataQ = await getDocs(q);
    console.log(dataQ);
    // paso los datos a el estado sync
    const prod:any[] = [];
    dataQ.forEach((docu) => {
      prod.push(docu.data());
    });
    dispatch(actionSearchEjerciciosSyn(prod));
  };
};

export const actionSearchEjerciciosSyn = (payload:any) => {
  return {
    type: typesEjercicios.search,
    payload,
  };
};

