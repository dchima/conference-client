import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import { Nav } from 'components';

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <ProductContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Attendees</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
  </ProductContainer>
);

export default App;
