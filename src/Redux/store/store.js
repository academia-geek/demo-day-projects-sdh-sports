import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import loginReducer from "../reducers/loginReducer";
import ejerciciosReducer from "../reducers/ejerciciosReducer";
import { thunk } from "redux-thunk";
import imcReducer from "../reducers/imcReducer";
import perfilReducer from "../reducers/perfilReducer";


// Configuracion de los middleware para manejar acciones asíncronas con Redux-Thunk
const middleware = [thunk];

// Ojo: solo para el entorno de desarrollo ye sto me permite ver a la extensión de Redux en la consola
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const reducers = combineReducers({
  loginStore: loginReducer,
  ejerciciosStore: ejerciciosReducer,
  imcStore: imcReducer,
  perfilStore: perfilReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);