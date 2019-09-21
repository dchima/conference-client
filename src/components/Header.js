import React from 'react';

const Header = () => {
  const styles = {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontFamily: 'monospace',
    fontSize: '80px',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <header style={styles}>
      {'CONFERENCE CLIENT'}
    </header>
  );
};

export default Header;
