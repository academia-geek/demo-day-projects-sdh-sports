import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DivHome, Slogan, Span, StyledDiv, StyledImage, StyledInnerDiv, StyledParagraph } from "../Styles/styled";



const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  return (
    <div>
      
     
        <DivHome>
          <Span style={{fontFamily: "Dosis, sans-serif",
           fontSize:"bold"}}>
          Hola,{" "}
        {!user ? "Guest" : !user.displayName ? user.email : user.displayName}!
          </Span>
        </DivHome>
        <DivHome>
    <Slogan>Con SDH Sports, Tu camino hacia un cuerpo sano!</Slogan>
        </DivHome>

        <StyledParagraph
          >Bienvenido! En SDH Sports podrás encontrar las ayudas necesarias para mejorar tu salud y condición física. Podrás calcular tu índice de masa corporal (IMC), descubrir rutinas de ejercicio personalizadas y explorar nuestra tienda para obtener los productos que necesitas para alcanzar tus metas de fitness. ¡Estamos aquí para ayudarte en tu viaje hacia una vida más activa y saludable!</StyledParagraph>

        <StyledDiv>
        <StyledInnerDiv>
          <Link to = '/rutinas' style={{
            textDecoration: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />

            </div>
            <h3 style={{ color: 'white', fontFamily: "Dosis, sans-serif",
           fontSize:"bold"}}>Rutinas</h3>
          </Link>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <Link to= '/shop'  style={{
            textDecoration: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710286362/SDH/png_1_bjxobk.png" alt="" />
            </div>
            <h3 style={{ color: 'white', fontFamily: "Dosis, sans-serif",
           fontSize:"bold" }}>Proteinas</h3>
          </Link>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <Link to='/imc'  style={{
            textDecoration: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710286359/SDH/png_3_ulksbt.png" alt="" />
            </div>
            <h3 style={{ color: 'white', fontFamily: "Dosis, sans-serif",
           fontSize:"bold" }}>Salud</h3>
          </Link>
        </StyledInnerDiv>
      </StyledDiv>

      <StyledDiv>
        <StyledInnerDiv>
          <Link to='/shop'  style={{
            textDecoration: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710286359/SDH/png_2_uhsi6e.png" alt="" />

            </div>
            <h3 style={{ color: 'white', fontFamily: "Dosis, sans-serif",
           fontSize:"bold" }}>Materiales</h3>
          </Link>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <Link to='/addperfil'  style={{
            textDecoration: 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710288250/SDH/456283_ffmmgt.png" alt="" />
            </div>
            <h3 style={{ color: 'white', fontFamily: "Dosis, sans-serif",
           fontSize:"bold" }}>Perfil</h3>
          </Link>
        </StyledInnerDiv>
      </StyledDiv>
      
          
    </div>
  );
};

export default Home;
