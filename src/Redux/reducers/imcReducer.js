import { typesImc } from "../types/types";

const initialState = {
  imc: [],
};

const imcReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesImc.add:
      return {
        imc: [...state.imc, action.payload],
      };
      default:
        return state;
    }
  };
  
  export default imcReducer;
  