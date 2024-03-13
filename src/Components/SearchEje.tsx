import React from "react";
import {StyledButton2, StyledButtonMini,Title} from "../Styles/styled";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { actionSearchEjerciciosAsyn } from "../Redux/actions/actionsEjercicios";
import Rutinas from "../Pages/Rutinas";


const SearchEje = () => {
  const dispatch = useDispatch()
const formik = useFormik({
  initialValues: {
    search: "",
  },
  validationSchema: Yup.object({
    search: Yup.string().required("Este campo es requerido"),
  }),
  onSubmit: (values) => {
    console.log(values);
      dispatch(actionSearchEjerciciosAsyn(values.search))
  },
});

  return (
      <div>
        <Title style={{
          textAlign:'center'
        }}> Comienza a buscar tus Ejercicios!</Title>
        <div style={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

       
      <form onSubmit={formik.handleSubmit}>
        <input style={{

          borderRadius: "15px", 
          marginRight: "20px", 
          marginInlineStart:"20px", 
          color:"white",
          fontFamily: "Dosis, sans-serif",
          fontSize: "20px",
          padding: '10px'
        }}


          name="search"
          placeholder="Buscar Ejercicios"
          onChange={formik.handleChange}
          value={formik.values.search}
          className={formik.touched.search && formik.errors.search ? 'error' : ''}
        />

        <StyledButtonMini type="submit">Buscar</StyledButtonMini>
      </form>
      </div>
      <Rutinas />
    </div>
  )
}

export default SearchEje;