import { typesPerfil } from "../types/types";

const initialState = {
  perfil: [],
};

const perfilReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesPerfil.list:
      return {
        perfil: [...action.payload],
      };

    case typesPerfil.add:
      return {
        perfil: [...state.perfil, action.payload],
      };
    case typesPerfil.delete:
      return {
        perfil: state.perfil.filter((pe) => pe.id !== action.payload),
      };
    case typesPerfil.search:
      return {
        perfil: action.payload,
      };

    case typesPerfil.edit:
      const index = state.perfil.findIndex(
        (perfil) => perfil.id === action.payload.id
      );
      if (index !== -1) {
        const updatedPerfil = { ...state.perfil[index] };
        for (const property in action.payload) {
          if (updatedPerfil.hasOwnProperty(property)) {
            updatedPerfil[property] = action.payload[property];
          }
        }
        return {
          ...state,
          products: [
            ...state.perfil.slice(0, index),
            updatedPerfil,
            ...state.perfil.slice(index + 1),
          ],
        };
      } else {
        console.warn(
          `Product with ID ${action.payload.id} not found for editing.`
        );
        return state;
      }

    default:
      return state;
  }
};

export default perfilReducer;
