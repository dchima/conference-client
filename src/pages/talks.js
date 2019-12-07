import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, TalkCard } from 'components';

const VisionContainer = styled.div`
  position: relative;
  display: flex;
  margin: 200px 150px 0px 280px;
  flex-direction: column;
  align-items: center;
  ${Screen.largePhone`
    margin-left: 170px;
`};
`;

const Batch = styled.div`
  position: relative;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  ${Screen.largePhone`
    margin-top: 0px;
    align-items: center;
    margin-bottom: 10px;
`};
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      talks: [],
    };
  }

  componentDidMount() {
    fetch('https://conference-talks.herokuapp.com/api/talks')
      .then((res) => res.json())
      .then((response) => {
        this.setState({ talks: response.data });
      })
      .catch(console.log);
  }

  render() {
    const talks = this.state.talks.map((talk) => <TalkCard key={talk.id} content={talk} />);
    return (
      <VisionContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Talks</title>
    </Helmet>
     <GlobalStyle />
     <Batch>
      {talks}
     </Batch>
     <Nav />
  </VisionContainer>
    );
  }
}
export default App;
