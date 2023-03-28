import React, { useState } from "react";
import styled from "@emotion/styled";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const LightSwitch = styled.div`
  width: 100px;
  height: 60px;
  background-color: ${(props) => (props.isOn ? "#4caf50" : "#f44336")};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
`;

const Switch = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: ${(props) => (props.isOn ? "45px" : "5px")};
  transition: all 0.3s;
`;

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <Container>
      <Title>Mesh network IOT test</Title>
      <LightSwitch isOn={isOn} onClick={toggleSwitch}>
        <Switch isOn={isOn} />
      </LightSwitch>
    </Container>
  );
}

export default App;
