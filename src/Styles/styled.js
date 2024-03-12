import { Field, Form } from 'formik';
import {  CardGroup, Carousel, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const colors = {
  black: '#000000',
  green: '#4caf50',
  yellow: '#ffd700',
  gray: 'gray',
  blue: '#12748e',
  yellowLight: '#ffff5f'
};

/*********REGISTER*************/

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1709771520/SDH/png_xrj4te.png');
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

export const BackgroundContainer = styled.div`
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1710267288/1345029_2_krnjaj.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  align-Content: center;
  align-items: center;
`;

export const StyledFormControl = styled(Form)`
max-width: 200px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 8px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${colors.green};
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
  color: ${colors.yellow};
`;


/*********LOGIN*************/

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/sdhsports/image/upload/v1709771520/SDH/png_xrj4te.png");
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
  background-color: ${colors.green};
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
  color: ${colors.yellow};
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: ${colors.yellow};
  }
`;

/********HEADER************/

export const CustomNav = styled.nav`
  padding: 15px 200px;
  margin: 0 100px;
  border-radius: 40px;
  background-color: ${colors.gray};
  font-size: 25px;
  color: white;

  a:hover {
    color: ${colors.blue};
    font-size: 28px;
  }
`;
export const NavbarPeque = styled.nav`
padding: 15px 220px 15px 220px;
margin: 40px 400px;
border-radius: 40px;
background-color: ${colors.gray};
font-size: 25px;
color: white;

a:hover {
  color: ${colors.blue};
  font-size: 28px;
}
`;
export const NavLinkPeque = styled(Link)`
  margin-right: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#12748e" : "inherit")};
`;

export const NavLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#12748e" : "inherit")};
`;
export const StyledBrand = styled(Navbar.Brand)`
  color: white;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-size: 34px;
  cursor: pointer;
  margin-left: 40px;
  &:hover {
    color: ${colors.blue};
  }
`;

export const StyledButton = styled.button`
  background-color: ${colors.yellowLight};
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

export const StyledButton2 = styled.button`
  background-color: ${colors.yellowLight};
  color: black;
  font-weight: bold;
  padding: 10px 10px;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0 10px 25px 1px rgba(255, 255, 0, 0.5);
  text-align: center;
  white-space: nowrap;
  font-family: "Archivo Black", sans-serif;
  font-size: 22px;
  margin: 0 auto;

  &:hover {
    padding: 15px 100px;
  }
`;


/**********INDEX**********/

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 60px;
  color: ${colors.yellowLight};
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
  font-size: 16px; 
  color: #333; 
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  display: block;
  width: 600px;
  height: 750px;
  border: 4px ${colors.yellowLight} solid;
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
  background-color: ${colors.yellowLight};
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
background-color: ${colors.gray};

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
color: white;
text-decoration: none;
margin-right: 40px;
text-align: center;


&:hover {
  text-decoration: underline;
  color: ${colors.blue};
}
`;

/*********RUTINAS***************/

export const StyledCarousel = styled(Carousel)`
margin-bottom: 40px;
height: 400px;
  .carousel-indicators {
    z-index: 4;
    margin-right: 40%;
    margin-bottom: 0px;
    margin-left: 40%;
    border: none;
    padding: 10px;
  }
  
`;
export const Rutine = styled.h2`
color:  #12748e;
text-align: center;
`;
export const LinkRutine = styled(Link)`
color:  #12748e;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;

export const CardsGroup = styled(CardGroup)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; 
  margin:30px;

`;


/********MODAL**********/

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: black;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.h3`
  margin: 0 auto;
  color: white;
  text-align: center;
  
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;