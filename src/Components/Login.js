import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../Redux/actions/actionsLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/madrigalsito/image/upload/v1709771520/SDH/png_xrj4te.png");
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
`;

const LoginBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;


const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoginButton = styled.button`
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

const ImageButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleImage = styled.img`
  max-width: 60px;
  height: auto;
`;
const RegisterLink = styled.div`
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
const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };
  return (
    <LoginContainer>
      <LoginBox>
        <LoginForm onSubmit={handleSubmit}>
          
            <LoginInput
              type="email"
              placeholder="user_email@email.com"
              name="email"
              value={formValue.email}
              onChange={handleInputChange}
            />
            <LoginInput
              type="password"
              placeholder="Password"
              name="pass"
              value={formValue.pass}
              onChange={handleInputChange}
            />
            <LoginButton type="submit">Login</LoginButton>
            <ImageButton onClick={() => dispatch(actionGoogle())}>
              <GoogleImage
                src="https://res.cloudinary.com/madrigalsito/image/upload/v1709772751/SDH/free-google-1772223-1507807_msshbm.webp"
                alt="Google Login"
              />
            </ImageButton>

          <RegisterLink>
            <StyledLink to="/register">
              You do not have an account? Sign up!
            </StyledLink>
          </RegisterLink>
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
