import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import { Nav } from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const App = () => (
  <AppContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Conference Talks</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
  </AppContainer>
);

export default App;
