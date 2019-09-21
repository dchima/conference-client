/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Header from './components/Header';
import ViewTalk from './components/ViewTalk';
import './style/App.css';

class App extends Component {
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
    console.log('talks: ', this.state.talks);
    const viewTalk = this.state.talks.map((talk) => <ViewTalk key={talk.id} item={talk} />);
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          {viewTalk}
        </div>
      </div>
    );
  }
}

export default App;
