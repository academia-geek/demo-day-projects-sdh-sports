import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { actionRegisterAsync } from "../Redux/actions/actionsRegister";
import styled from "styled-components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  pass: string;
  pass2: string;
}
const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/madrigalsito/image/upload/v1709771520/SDH/png_xrj4te.png');
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
  
`;

const RegisterBox = styled.div`
flex: 1;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 40px;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const RegisterForm = styled(Form)`
  width: 100%;
  max-width: 400px;
`;

const FormInput = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

`;

const LoginLink = styled.div`
text-align: center;
margin-top: 16px;
font-weight: bold;
font-size: 25px;
color: #ffd700;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: #ffd700;
  }
`;
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


