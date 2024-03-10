import { Field, Form } from 'formik';
import {  Carousel, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


/*********REGISTER*************/

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/madrigalsito/image/upload/v1709771520/SDH/png_xrj4te.png');
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
`;

export const RegisterBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const RegisterForm = styled(Form)`
  width: 100%;
  max-width: 400px;
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 8px;
`;

export const SubmitButton = styled.button`
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

export const LoginLink = styled.div`
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
  font-size: 25px;
  color: #ffd700;
`;


/*********LOGIN*************/

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/madrigalsito/image/upload/v1709771520/SDH/png_xrj4te.png");
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
`;

export const LoginBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;


export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
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

export const ImageButton = styled.button`
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

export const GoogleImage = styled.img`
  max-width: 60px;
  height: auto;
`;
export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
  font-size: 25px;
  color: #ffd700;
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: #ffd700;
  }
`;

/********HEADER************/

export const CustomNav = styled.nav`
  padding: 15px 200px;
  margin: 0 100px;
  border-radius: 40px;
  background-color: gray;
  font-size: 25px;
  color: white;

  a:hover {
    color: #12748e;
    font-size: 28px;
  }
`;

export const NavLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#12748E" : "inherit")};
`;
export const StyledBrand = styled(Navbar.Brand)`
  color: white;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-size: 34px;
  cursor: pointer;
  margin-left: 40px;
  &:hover {
    color: #12748e;
  }
`;

export const StyledButton = styled.button`
  background-color: #ffff5f;
  color: black;
  font-weight: bold;
  padding: 10px 100px;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0 10px 25px 1px rgba(255, 255, 0, 0.5);
  text-align: center;
  white-space: nowrap;
  font-family: "Archivo Black", sans-serif;
  font-size: 22px;
  margin-top: -10px;

  &:hover {
    padding: 15px 100px;
    margin-right: 60px;
  }
`;

/**********INDEX**********/

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 60px;
  color: #ffff5f;
  font-family: "Archivo Black", sans-serif;
`;

export const Text = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.5;
  margin-left: 60px;
  margin-top: 70px;
  margin-right: 180px;
  color: white;
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
`;

const load = keyframes`
  0% { width: 0; }
  100% { width: 85%; }
`;

export const ProgressBarContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;
  margin-left: 80px;
`;

export const ProgressBarValue = styled.div`
  animation: ${load} 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 30px;
  width: 0;
`;

export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const GrayBox = styled.div`
  background-color: gray;
  margin-left: 40px;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  display: inline-block;
  height: 250px;
  border-bottom: none;
  width: 270px;
`;

export const ImageBox = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const TextBox = styled.p`
  font-size: 16px; /* Tamaño del texto */
  color: #333; /* Color del texto */
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  display: block;
  width: 600px;
  height: 750px;
  border: 4px #ffff5f solid;
  border-radius: 15px;
`;

export const Overlay = styled.div`
  position: absolute;
  margin-top: -240px;
  margin-left: -40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Boton = styled.button`
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #ffff5f;
  color: black;
  font-weight: bold;
  padding: 10px 100px;
  border-radius: 20px;
  box-shadow: 0 10px 25px 20px rgba(255, 255, 0, 0.5);
  text-align: center;
  white-space: nowrap;
  font-family: "Kanit", sans-serif;
  font-size: 22px;
  margin-top: 30px;

  &:hover {
    padding: 15px 120px;
  }
`;

export const Texto = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
`;
export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
color: black;
padding: 0.5rem 1rem;
`;

export const Titulo = styled.h3`
margin: 0;
margin-left: 90px;
`;

export const Navigation = styled.div`
display: flex;
gap: 1rem;
`;

export const MiniNavLink = styled(Link)`
color: black;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`;

/*********RUTINAS***************/

export const StyledCarousel = styled(Carousel)`
  .carousel-indicators {
    margin-right: 47%;
    margin-bottom: 0;
    margin-left: 47%;
    border: none;
  }
`;
export const Rutine = styled.h2`
color:  #12748e;
text-align: center;

&:hover {
  text-decoration: underline;
}
`;
export const LinkRutine = styled(Link)`
color:  #12748e;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;