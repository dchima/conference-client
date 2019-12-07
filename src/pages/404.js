import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import { Nav } from 'components';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BodyText = styled.p`
  text-align: center;
  font-weight: 800;
  font-size: 100px;
  line-height: 80px;
  color: #2844A0;
`;
function App() {
  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fourshores | 404</title>
      </Helmet>
      <GlobalStyle />
      <BodyText>
        Page not found.
      </BodyText>
      <Nav />
    </PageContainer>

  );
}

export default App;
