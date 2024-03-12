import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
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
        <h1> Comienza a buscar tus Ejercicios!!!</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="search"
          placeholder="Buscar Ejercicios"
          onChange={formik.handleChange}
          value={formik.values.search}
          className={formik.touched.search && formik.errors.search ? 'error' : ''}
        />

        <Button type="submit">Buscar</Button>
      </form>
      <Rutinas />
    </div>
  )
}

export default SearchEje;