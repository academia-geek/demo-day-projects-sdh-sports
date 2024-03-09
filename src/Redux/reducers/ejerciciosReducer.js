import { typesEjercicios } from "../types/types";

const initialState = {
  ejercicios: [],
};

const ejerciciosReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesEjercicios.list:
      return {
        ejercicios: [...action.payload],
      };

    case typesEjercicios.add:
      return {
        ejercicios: [...state.ejercicios, action.payload],
      };
    case typesEjercicios.delete:
      return {
        ejercicios: state.ejercicios.filter((p) => p.id !== action.payload),
      };
    case typesEjercicios.search:
      return {
        ejercicios: action.payload,
      };

    case typesEjercicios.edit:
      const index = state.ejercicios.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        const updatedProduct = { ...state.ejercicios[index] };
        for (const property in action.payload) {
          if (updatedProduct.hasOwnProperty(property)) {
            updatedProduct[property] = action.payload[property];
          }
        }
        return {
          ...state,
          ejercicios: [
            ...state.ejercicios.slice(0, index),
            updatedProduct,
            ...state.ejercicios.slice(index + 1),
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

export default ejerciciosReducer;
