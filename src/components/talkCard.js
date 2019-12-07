import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Basics, Screen } from 'styles';


const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 3px ${Basics.colors.chalkBlue};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  height: 400px;
  width: 340px;
  background-color: ${Basics.colors.white};
  transition: ${Basics.transition};
  ${Screen.smallPhone`
    width: 300px;
  `};
    ${Screen.smallPhone`
    width: 300px;
  `};
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  overflow: hidden;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;
const Title = styled.h1`
  color: ${Basics.colors.rose};
  font-weight: 500;
  font-size: 40px;
  padding-top: 20px;
  
  ${Screen.tablet`
    padding-top: 0px;
  `};
  ${Screen.smallPhone`
  font-size: 50px;
`};
`;

const Name = styled.h1`
  color: ${Basics.colors.neonBlue};
  font-weight: 500;
  font-size: 40px;
  padding-top: 20px;
  
  ${Screen.tablet`
    padding-top: 0px;
  `};
`;

const BodyText = styled.p`
  position: relative;
`;

const TalkCard = ({ content }) => (
  <Card>
  <ContentContainer>
    <Title>
      {content.talkTitle}
    </Title>
    <Name>
      {content.presenterName}
    </Name>
    <BodyText>
      {content.venue} <br />
      {content.organization} <br />
      {format(new Date(content.talkDate), 'MM/dd/yyyy')} <br />
      {content.talkDuration}
    </BodyText>
  </ContentContainer>
</Card>
);
export default TalkCard;

