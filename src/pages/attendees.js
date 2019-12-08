import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, AttendeeCard } from 'components';


const AttendeeContainer = styled.div`
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
      attendees: [],
    };
  }

  componentDidMount() {
    fetch('https://conference-talks.herokuapp.com/api/attendee')
      .then((res) => res.json())
      .then((response) => {
        this.setState({ attendees: response.data });
      })
      .catch(console.log);
  }

  render() {
    const attendees = this.state.attendees.map(
      (attendee, i) => <AttendeeCard key={i} content={attendee} />,
    );
    return (
    <AttendeeContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Attendees</title>
      </Helmet>
      <GlobalStyle />
      <Batch>
        {attendees}
      </Batch>
      <Nav />
    </AttendeeContainer>
    );
  }
}
export default App;
