import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav, Start, AttendeeForm, TalkForm,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 200px 180px 30px 200px;
  ${Screen.largePhone`
  margin-left: 10px;
  margin-right: 10px;
`};
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;


const App = () => (
  <AppContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Conference Talks</title>
  </Helmet>
    <GlobalStyle />
    <Start />
    <FormContainer>
      <AttendeeForm />
      <TalkForm />
    </FormContainer>
    <Nav />
  </AppContainer>
);

export default App;
