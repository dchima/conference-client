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
  width: 200px;
  background-color: ${Basics.colors.white};
  ${Screen.largePhone`
    margin: 20px;
    width: 100%;
  `};
  ${Screen.smallPhone`
  margin: 10px 3px;
  width: 300px;
`};
`;

const ContentContainer = styled.div`
  padding: 10px 20px;
  ${Screen.largeScreen`
  padding: 10px 20px;
  `};
  ${Screen.tablet`
    padding: 40px 20px;
  `};
`;

const Name = styled.h1`
  color: ${Basics.colors.neonBlue};
  font-weight: 500;
  font-size: 30px;
  padding-top: 20px;
  
  ${Screen.tablet`
    padding-top: 0px;
  `};
`;
const SubTitle = styled.h1`
color: ${Basics.colors.rose};
font-weight: 500;
font-size: 20px;
padding-top: 20px;

${Screen.tablet`
  padding-top: 0px;
`};
`;
const BodyText = styled.p`
  position: relative;
  font-size: 14px;
`;
const TalkContainer = styled.div``;

const Talks = ({ content }) => (
  <BodyText>
    {content.talkTitle} <br />
    {format(new Date(content.talkDate), 'MM/dd/yyyy')}
  </BodyText>
);

const AttendeeCard = ({ content }) => {
  const talks = content.talks.map(
    (item, i) => <Talks key={i}
    content={item} />,
  );
  return (
    <Card>
    <ContentContainer>
      <Name>
        {content.firstName} {content.lastName}
      </Name>
      <SubTitle>
        talks
      </SubTitle>
      <TalkContainer>
        {talks}
      </TalkContainer>
    </ContentContainer>
  </Card>
  );

};
export default AttendeeCard;
