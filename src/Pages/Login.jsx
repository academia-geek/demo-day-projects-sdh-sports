import React from "react";
import useForm from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../Redux/actions/actionsLogin";
import {GoogleImage, ImageButton, LoginBox, LoginButton, LoginContainer, LoginForm, LoginInput, RegisterLink, StyledLink, Title} from '../Styles/styled'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



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
  <Title style={{ color: "white" }}>Inicia sesión con tu cuenta!</Title>
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
          src="https://res.cloudinary.com/sdhsports/image/upload/v1709772751/SDH/free-google-1772223-1507807_msshbm.webp"
          alt="Google Login"
        />
      </ImageButton>

      <RegisterLink>
        <StyledLink to="/register">No tienes cuenta? Registrate!</StyledLink>
      </RegisterLink>
    </LoginForm>
  </LoginBox>
</LoginContainer>
  );
};

export default Login;
