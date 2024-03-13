import { Field, Form } from 'formik';
import {  CardGroup, Carousel, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const colors = {
  black: '#000000',
  green: '#4caf50',
  yellow: '#ffd700',
  gray: 'gray',
  blue: 'gold',
  yellowLight: '#ffff5f',
  red:'#9f1239'
};

/*********REGISTER*************/

export const RegisterContainer = styled.div`
  padding-top: 1em;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1709771520/SDH/png_xrj4te.png');
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
  margin-top: 2%;
  margin-right: 43%;
  margin-left: 43%;
  border: 46px none #000000;
  box-shadow: 13px 7px 55px -11px rgba(18,53,59,0.73);
  border-radius: 48px 48px 48px 48px;
  opacity: 83%;
  font-Family: "Dosis", sans-serif;
  font-Size:20px;
`;


export const LabelForm = styled.label`
  font-family: "Dosis", sans-serif;
  font-size: 20px;
  
`;

export const RegisterBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  margin-left: 7em;
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
export const BackgroundContainer2 = styled.div`
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1710296347/IsR6Au_ttfhfy.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  align-Content: center;
  align-items: center;
`;
export const BackgroundContainer3 = styled.div`
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1710301748/Sustainable_Fitness_Eco_Sports_kdhx3d.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  align-Content: center;
  align-items: center;
`;
export const BackgroundContainer4 = styled.div`
  background-image: url('https://res.cloudinary.com/sdhsports/image/upload/v1710302659/1043655_pbrmib.jpg');
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
  padding-top: 1em;
  padding-left: 1em;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/sdhsports/image/upload/v1709771520/SDH/png_xrj4te.png");
  background-size: cover;
  background-position: center;
  font-family: "Dosis", sans-serif;
  font-size: 20px;
  color:white;
`;

export const LoginBox = styled.div`
  flex: 1;
  display: flex;
  margin-left: 10em;
  margin-top: 4em;
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
  display: flex;
  align-items: center;
  padding: 15px 140px 15px 130px;
  margin: 0 0 0 90px;
  border-radius: 40px;
  background-color: ${colors.gray};
  font-size: 25px;
  color: white;
  font-Family: "Dosis", sans-serif;
  font-Size:22px;

  a:hover {
    color: gold;
    font-size: 28px;
  }
`;

export const CustomNav2 = styled.nav`
display: flex;
align-items: center;
  padding: 15px 100px 15px 130px;
  margin: 0 0 0 90px;
  border-radius: 40px;
  background-color: ${colors.gray};
  font-size: 25px;
  color: white;
  font-Family: "Dosis", sans-serif;
  font-Size:28px;

  a:hover {
    color: ${colors.blue};
    font-size: 33px;
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
  color: ${(props) => (props.active ? "gold" : "inherit")};
`;

export const NavLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "gold" : "inherit")};
`;
export const StyledBrand = styled(Navbar.Brand)`
  color: ${colors.yellowLight};
  font-family: "Archivo Black", sans-serif;
  font-weight: bold;
  font-size: 34px;
  cursor: pointer;
  margin-left: 40px;
  &:hover {
    color: gold;
  };
  
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
export const StyledButtonMini = styled.button`
  background-color: ${colors.yellowLight};
  color: black;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0 10px 25px 1px rgba(255, 255, 0, 0.5);
  text-align: center;
  white-space: nowrap;
  font-family: "Archivo Black", sans-serif;
  font-size: 22px;
  margin: 0 auto;

  &:hover {
    padding: 8px 15px;
  }
`;

export const StyledButtonCerrar = styled.button`
  background-color: ${colors.red};
  color: black;
  font-weight: bold;
  padding: 5px 5px;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: -2px 9px 53px 0px rgba(255,79,79,1);
  text-align: center;
  white-space: nowrap;
  font-family: "Archivo Black", sans-serif;
  font-size: 22px;
  margin: 0 auto;

  &:hover {
    padding: 8px 15px;
  }
`;


/**********INDEX**********/

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 20px;
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
  font-Family: "Dosis", sans-serif;
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
  margin-right: 60px;

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
  margin-right: 60px;
`;
export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${colors.black};

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
font-Family: "Dosis", sans-serif;
font-Size:30px;


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
color:  gold;
text-align: center;
`;
export const LinkRutine = styled(Link)`
color:  gold;
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
  font-Family: "Dosis" , sans-serif;
  font-Size: 20px;
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

export const StyledOffcanvasContainer = styled(Offcanvas)`

font-Family: "Dosis", sans-serif;
  font-Size:20px;
  background-color: black;
  color: white;
  
  .offcanvas-header {
    background-color: ${colors.gray}; 
    color: white; 
  }

  .offcanvas-title {
    margin-left: 15px; 
  }

  .offcanvas-body {
    padding: 20px; 
    
  }

  .offcanvas-links a {
    display: block; 
    margin-bottom: 10px; 
    margin-top: 20px;
    color: gold; 
    text-decoration: none; 
    margin-bottom: -15px;
  }

  .offcanvas-links a:hover {
    text-decoration: underline; 
  }
`;