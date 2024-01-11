import React from "react";
import styled, { keyframes } from "styled-components";

// Create a keyframe animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 20px;
  poision: absoulot;
  top: 0;
  right: 0;
  animation: ${rotate} 1s linear infinite;
  margin: 20px auto;
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;
