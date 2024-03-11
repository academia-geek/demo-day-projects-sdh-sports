import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";



const Overlay = styled.div`
  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: white;
  font-size: 24px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 40px;
  width: 400px;
  
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: #007bff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  text-align: center;
`;

const StyledInnerDiv = styled.div`
  width: 250px;
  margin: 10px;
  padding: 20px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  return (
    <div>
      
     
        <Overlay>
          <Span>
          Hola,{" "}
        {!user ? "Guest" : !user.displayName ? user.email : user.displayName}!
          </Span>
          <Button>Empieza hoy</Button>
        </Overlay>

        <StyledDiv>
        <StyledInnerDiv>
          <a href="link1">
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />
            <h3 style={{ color: 'white' }}>Rutinas</h3>
          </a>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <a href="link1">
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />
            <h3 style={{ color: 'white' }}>Rutinas</h3>
          </a>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <a href="link1">
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />
            <h3 style={{ color: 'white' }}>Rutinas</h3>
          </a>
        </StyledInnerDiv>
      </StyledDiv>

      <StyledDiv>
        <StyledInnerDiv>
          <a href="link1">
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />
            <h3 style={{ color: 'white' }}>Rutinas</h3>
          </a>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <a href="link1">
            <StyledImage src="https://res.cloudinary.com/sdhsports/image/upload/v1710122937/SDH/3466056_vjq8bi.png" alt="" />
            <h3 style={{ color: 'white' }}>Rutinas</h3>
          </a>
        </StyledInnerDiv>
      </StyledDiv>
      
          <p style={{
            textAlign:'center',
            color: 'white',
            fontSize: '20px',
            margin: '20px 20% 90px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '10px 40px',
            borderRadius: '30px'
          }}
          >Bienvenido! En SDH Sports podrás encontrar las ayudas necesarias para mejorar tu salud y condición física. Podrás calcular tu índice de masa corporal (IMC), descubrir rutinas de ejercicio personalizadas y explorar nuestra tienda para obtener los productos que necesitas para alcanzar tus metas de fitness. ¡Estamos aquí para ayudarte en tu viaje hacia una vida más activa y saludable!</p>
    </div>
  );
};

export default Home;
