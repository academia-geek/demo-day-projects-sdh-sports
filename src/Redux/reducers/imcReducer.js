const initialState = {
    resultadoIMC: null
  };
  
  const imcReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALCULAR_IMC':
        return {
          ...state,
          resultadoIMC: action.payload
        };
      default:
        return state;
    }
  };
  
  export default imcReducer;
  