import React from 'react';

const Header = () => {
  const styles = {
    color: '#ef38dd',
    backgroundColor: 'blue',
    fontFamily: 'monospace',
  };

  return (
    <header className="navbar" style={styles}>
      {'CONFERENCE API'}
    </header>
  );
};

export default Header;
