import React from 'react';
import styled from 'styled-components';
import {
  Basics,
  Screen,
} from 'styles';

const StartContainer = styled.div`
  position: relative;
  flex-direction: column;
`;

const Title = styled.h1`
  position: relative;
  //border: 1px solid black;
  color: ${Basics.colors.solidBlue};
  font-size: 150px;
  word-spacing: 20px;
  font-weight: 600;
  line-height: 200px;
  margin: 0;
  ${Screen.tablet`
    font-size: 60px;
    font-weight: 500;
    line-height: 70px;
  `};
  ${Screen.smallPhone`
  font-size: 40px;
  `};
`;

const BodyText = styled.p`
  position: relative;
  font-size: 50px;
  color: ${Basics.colors.bloodRed};
  width: 55%;
  ${Screen.tablet`
  width: 70%;
`};
  ${Screen.largePhone`
  width: 97%;
  font-size: 20px;
`};
`;
const Start = () => (
  <StartContainer>
  <Title>
    Conference Talks
  </Title>
  <BodyText>
    A place to view all our conference talks, and register for any of your choice!
  </BodyText>
</StartContainer>
);
export default Start;
