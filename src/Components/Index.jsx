import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  margin-left: 200px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.5;
  margin: 100px;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubsectionTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #0069d9;
  }
`;

const load = keyframes`
  0% { width: 0; }
  100% { width: 85%; }
`;

export const ProgressBarContainer = styled.div`
  background: rgba(255,255,255,0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;
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
const FitnessAppIntroduction = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60% 40%'
    }}>
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
            padding: "10px",
            textAlign: "center",
          }}
        >
          TRANSFORMANDO
        </span>
        
        <br />
        <span style={{
          marginLeft: '20px'
        }}>TU  JORNADA
        </span>{" "}
        FITNESS <br />
        <span style={{
          marginLeft: '200px'
        }}>HOY</span>
        <ProgressBarContainer>
      <ProgressBarValue />
      <ProgressText>Track Your Progress</ProgressText>
    </ProgressBarContainer>
      </Title>
      
      <Text>
        La aplicación definitiva para acceder a entrenadores personales de primer nivel que
        te ayudarán a alcanzar tus objetivos de fitness. Ya seas un principiante o un
        entusiasta del fitness experimentado, nuestro equipo de entrenadores certificados
        está aquí para proporcionarte programas de entrenamiento personalizados adaptados a
        tus necesidades. Desde entrenamiento de fuerza y pérdida de peso hasta construcción
        muscular y flexibilidad, estamos aquí para ayudarte. Prepárate para transformar tu
        cuerpo y mejorar tu bienestar general con la orientación de nuestros dedicados
        entrenadores personales.
      </Text>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </Container>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default FitnessAppIntroduction;
