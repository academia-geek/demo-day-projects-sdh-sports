import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  margin-left: 60px;
  color: #FFFF5F;
  font-family: "Archivo Black", sans-serif;
`;

const Text = styled.p`
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

const ProgressBarContainer = styled.div`
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

const ProgressBarValue = styled.div`
  animation: ${load} 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 30px;
  width: 0;
`;

const ProgressText = styled.span`
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
const GrayBox = styled.div`
  background-color: gray;
  margin-left: 40px;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  display: inline-block;
  height: 250px;
  border-bottom: none;
  width: 270px;
  
`;

const ImageBox = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const TextBox = styled.p`
  font-size: 16px; /* Tamaño del texto */
  color: #333; /* Color del texto */
`;
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  display: block;
  width: 600px;
  height: 750px;
  border: 4px #FFFF5F solid;
  border-radius: 15px;
`;

const Overlay = styled.div`
  position: absolute;
  margin-top: -240px;
  margin-left: -40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Boton = styled.button`
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #FFFF5F;
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

const Texto = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  
`;

const FitnessAppIntroduction = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
      }}
    >
      <Container>
        <Title>
          COMIENZA{" "}
          <span
            style={{
              position: "relative",
              top: "-8px",
              left: "-6px",
              fontSize: "30px",
              border: "white 3px solid",
              borderRadius: "40px",
              padding: "10px 80px",
              textAlign: "center",
            }}
          >
            A TRANSFORMAR
          </span>
          <br />
          <span
            style={{
              marginLeft: "25px",
            }}
          >
            TU VIDA
          </span>{" "}
          ACTUAL EN UNA <br />
          <span
            style={{
              marginLeft: "100px",
            }}
          >
            FITNESS AHORA
          </span>
          <ProgressBarContainer>
            <ProgressBarValue />
            <ProgressText>Track Your Progress</ProgressText>
          </ProgressBarContainer>
        </Title>

        <Text>
          La aplicación definitiva para acceder a entrenadores personales de
          primer nivel que te ayudarán a alcanzar tus objetivos de fitness. Ya
          seas un principiante o un entusiasta del fitness experimentado,
          nuestro equipo de entrenadores certificados está aquí para
          proporcionarte programas de entrenamiento personalizados adaptados a
          tus necesidades. Desde entrenamiento de fuerza y pérdida de peso hasta
          construcción muscular y flexibilidad, estamos aquí para ayudarte.
          Prepárate para transformar tu cuerpo y mejorar tu bienestar general
          con la orientación de nuestros dedicados entrenadores personales.
        </Text>
        <div>
          <GrayBox>
            <Link to='/register'>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBox
                src="https://res.cloudinary.com/madrigalsito/image/upload/v1709687452/SDH/3310338_nn46jd.png"
                alt="Descripción de la imagen"
              />
            </div>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><TextBox>Rutina Personalizada</TextBox></div>
            
          </GrayBox>
          {/*  */}
          <GrayBox>
          <Link to='/register'>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBox
                src="https://res.cloudinary.com/madrigalsito/image/upload/v1709689243/SDH/30412_rxn9v0.png"
                alt="Descripción de la imagen"
              />
            </div>
            </Link>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><TextBox>Basado en tus Datos Personales</TextBox></div>
            
          </GrayBox>
          {/*  */}
          <GrayBox>
          <Link to='/register'>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBox
                src="https://res.cloudinary.com/madrigalsito/image/upload/v1709689196/SDH/11849947_hecfid.png"
                alt="Descripción de la imagen"
              />
            </div>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><TextBox>Trabajo Progresivo</TextBox></div>
            
          </GrayBox>
        </div>
      </Container>
      <ImageContainer>
        <Image
          src="https://res.cloudinary.com/madrigalsito/image/upload/v1709683450/SDH/pose-muscle-muscle-rod-press-hd-wallpaper-preview_axo8t6.jpg"
          alt=""
        />
        <Overlay>
          <Texto>COMIENZA A VIVIR TU EXPERIENCIA</Texto>
          <Link to='/register'>
          <Boton>Free Trial</Boton>
          </Link>
        </Overlay>
      </ImageContainer>
    </div>
  );
};

export default FitnessAppIntroduction;
