import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { actionRegisterAsync } from "../Redux/actions/actionsRegister";
import styled from "styled-components";
import { ErrorMessage, FormInput, LoginLink, RegisterBox, RegisterContainer, RegisterForm, StyledLink, SubmitButton } from "../Styles/styled";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  pass: string;
  pass2: string;
}

const RegisterFormik = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "NO cumple con el número min de caracteres")
      .max(50, "Excede el máximo")
      .required("Este campo es requerido"),
    lastName: Yup.string()
      .min(2, "NO cumple con el número min de caracteres")
      .max(50, "Excede el máximo")
      .required("Este campo es requerido"),
    email: Yup.string().email("Invalid email").required("Required"),
    pass: Yup.string()
      .min(8, "pass muy corto")
      .max(10, "Excede el máximo")
      .oneOf([Yup.ref("pass2"), "Los password No coinciden"])
      .required("Required"),
    pass2: Yup.string()
      .min(6, "Pass muy corto")
      .max(10, "Excede el máximo")
      .oneOf([Yup.ref("pass"), "Los password No coinciden"])
      .required("Required"),
  });

  const dispatch:any = useDispatch();

  const handleSubmit = async (
    values: FormValues,
  ) => {
    console.log(values);
    dispatch(actionRegisterAsync(
      values.email,
      values.pass,
      values.firstName,
      values.lastName
    ))}

  return (
    <RegisterContainer>
      <RegisterBox>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            pass2: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <RegisterForm>
              <FormInput
                name="firstName"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName && (
                <ErrorMessage>{errors.firstName}</ErrorMessage>
              )}

              <FormInput
                name="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName && (
                <ErrorMessage>{errors.lastName}</ErrorMessage>
              )}

              <FormInput
                name="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <FormInput
                name="pass"
                type="password"
                placeholder="Password"
              />
              {errors.pass && touched.pass && (
                <ErrorMessage>{errors.pass}</ErrorMessage>
              )}

              <FormInput
                name="pass2"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.pass2 && touched.pass2 && (
                <ErrorMessage>{errors.pass2}</ErrorMessage>
              )}

              <SubmitButton type="submit">Enviar</SubmitButton>
              <LoginLink>
                <StyledLink to="/login">Login</StyledLink>
              </LoginLink>
            </RegisterForm>
          )}
        </Formik>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default RegisterFormik;


