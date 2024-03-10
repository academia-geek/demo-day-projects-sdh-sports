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
  import { typesPerfil } from "../types/types";
  import { dataBase } from "../../Firebase/firebaseConfig";

  // ------------------Listar---------------------
export const actionListperfilAsyn:any = () => {
    const pro:any = [];
    return async (dispatch:any) => {
      const perfilesListar = await getDocs(collection(dataBase, "Perfil"));
      console.log("respuesta", perfilesListar);
      perfilesListar.forEach((pe) => {
        pro.push({
          ...pe.data(),
        });
      });
      console.log("LA LISTA DE FIRESTORE", pro);
      dispatch(actionListperfilSyn(pro));
    };
  };
  
  export const actionListperfilSyn = (payload:any) => {
    return {
      type: typesPerfil.list,
      payload,
    };
  };
  
  //----------------------add-----------------------//
  export const actionAddperfilAsyn:any = (payload:any) => {
    return async (dispatch:any) => {
      await addDoc(collection(dataBase, "Perfil"), payload)
        .then((resp) => {
          dispatch(actionAddperfilSyn(payload));
          dispatch(actionListperfilAsyn());
        })
        .catch((e) => {
          console.error("Error adding document: ", e);
        });
    };
  };
  export const actionAddperfilSyn = (payload:any) => {
    return {
      type: typesPerfil.add,
      payload,
    };
  };
  
  // ------------------Editar---------------------
  export const actionEditperfilAsyn:any = (payload:any) => {
    return async (dispatch:any) => {
      let uid = "";
      const collectionP = collection(dataBase, "Perfil");
      const q = query(collectionP, where("id", "==", payload.id));
      const datosQ = await getDocs(q);
      datosQ.forEach((docu) => {
        uid = docu.id;
      });
      const docRef = doc(dataBase, "Perfil", uid);
      await updateDoc(docRef, payload)
        .then((resp) => {
          dispatch(actionEditperfilSyn(payload));
          dispatch(actionListperfilAsyn());
        })
        .catch((error) => console.log(error));
    };
  };
  
  export const actionEditperfilSyn = (payload:any) => {
    return {
      type: typesPerfil.edit,
      payload,
    };
  };
  
  // ----------------Eliminar Perfiles-----------------------
  
  export const actionDeletePerfilAsyn = (payload:any) => {
    return async (dispatch:any) => {
      const perfilCollection = collection(dataBase, "Perfil");
      const q = query(perfilCollection, where("id", "==", payload));
      const dataQ = await getDocs(q);
      console.log(dataQ);
  
      dataQ.forEach((docu) => {
        deleteDoc(doc(dataBase, "Perfil", docu.id));
      });
      dispatch(actionDeletePerfilSyn(payload));
    };
  };
  
  export const actionDeletePerfilSyn = (payload:any) => {
    return {
      type: typesPerfil.delete,
      payload,
    };
  };
//   // ------------------Seacrh--------------------------
// export const actionSearchProductAsyn:any = (payload:any) => {
//   return async (dispatch:any) => {
//     // llamar a la colleccion para que me de los datos
//     const productosCollection = collection(dataBase, "Perfil");
//     // hacer el filtro por nombre
//     const q = query(
//       productosCollection,
//       where("description", ">=", payload),
//       where("description", "<=", payload + '\uf8ff')
//     );

//     const dataQ = await getDocs(q);
//     console.log(dataQ);
//     // paso los datos a el estado sync
//     const prod:any[] = [];
//     dataQ.forEach((docu) => {
//       prod.push(docu.data());
//     });
//     dispatch(actionSearchProductSyn(prod));
//   };
// };

// export const actionSearchProductSyn = (payload:any) => {
//   return {
//     type: typesPerfil.search,
//     payload,
//   };
// };