import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, TalkCard, MeetupForm } from 'components';

const TalksContainer = styled.div`
  position: relative;
  display: flex;
  margin: 200px 280px 0px 280px;
  align-items: center;
  flex-direction: column;
  ${Screen.largePhone`
    margin-left: 10px;
    margin-right: 10px;
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
      <TalksContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Talks</title>
    </Helmet>
     <GlobalStyle />
     <MeetupForm />
     <Batch>
      {talks}
     </Batch>
     <Nav />
  </TalksContainer>
    );
  }
}
export default App;
