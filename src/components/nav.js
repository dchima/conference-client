import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Basics, Screen } from 'styles';
import { links } from 'content';

const NavContainer = styled.div`
  position: fixed;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: cener;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${Basics.colors.creamWhite};
  width: 100%;
  transition: ${Basics.transition};
  ${Screen.largePhone`
    height: 80px;
  `};
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: ${Basics.transition};
  }
  .hidden {
    visibility: hidden;
    transition: ${Basics.transition};
    transform: translate(0, -100%);
  }
`;
const Svg = styled.header`
  position: absolute;
  padding-top: 40px;
  font-weight: 550;
  padding-left: 200px;
  ${Screen.largePhone`
    padding-left: 10px;
  `};
`;
const ListContainer = styled.div`
  font-size: ${Basics.fontSize.small};
  position: absolute;
  display: flex;
  flex-direction: row;
  padding-top: 45px;
  right: 140px;
  font-weight: 550;
  ${Screen.largePhone`
  padding-top: 40px;
  right: 10px;
  `};
  
`;
const NavList = styled.div`
  height: 23px;
  padding-right: 50px;
  ${Screen.largePhone`
    padding-right: 30px;
  `};
  ${Screen.smallPhone`
    padding-right: 15px;
  `};
`;
export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPosition: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPosition,
    });
  }

  render() {
    const navs = links.navLinks.map(
      (item, i) => <NavList key={i}>
  <Link to={item.url}>{item.name}</Link>
      </NavList>,
    );
    return (
      <Transition>
        <NavContainer className={this.state.show ? 'active' : 'hidden'}>
        <Svg>
          <Link to={'/'}>
            Conference Talks
          </Link>
        </Svg>
        <ListContainer>
          {navs}
        </ListContainer>
        </NavContainer>
      </Transition>
    );
  }
}

