import React from "react";
import { Link } from "react-router-dom";
import { Title, Text, ProgressBarContainer, ProgressBarValue, ProgressText, GrayBox, ImageBox, TextBox, ImageContainer, Image, Overlay, Boton, Texto, ResponsiveContainer } from '../Styles/styled'
const FitnessAppIntroduction = () => {
  return (
    

    
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gap: '40px'
      }}
    >
      <div>
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
                src="https://res.cloudinary.com/sdhsports/image/upload/v1709687452/SDH/3310338_nn46jd.png"
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
                src="https://res.cloudinary.com/sdhsports/image/upload/v1709689243/SDH/30412_rxn9v0.png"
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
                src="https://res.cloudinary.com/sdhsports/image/upload/v1709689196/SDH/11849947_hecfid.png"
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
      </div>
      <ImageContainer>
        <Image
          src="https://res.cloudinary.com/sdhsports/image/upload/v1709683450/SDH/pose-muscle-muscle-rod-press-hd-wallpaper-preview_axo8t6.jpg"
          alt=""
        />
        <Overlay>
          <Texto>COMIENZA A VIVIR TU EXPERIENCIA</Texto>
          <Link to='/register'>
          <Boton>Prueba Gratis</Boton>
          </Link>
        </Overlay>
      </ImageContainer>
    </div>
    
  );
};

export default FitnessAppIntroduction;
