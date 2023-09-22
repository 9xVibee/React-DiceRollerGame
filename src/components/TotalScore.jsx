/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const TotalScore = ({ totalScore }) => {
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
