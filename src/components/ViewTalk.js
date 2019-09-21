import React from 'react';

const ViewTalk = (props) => {
  const styles = {
    color: '#000000',
    backgroundColor: 'ghostwhite',
    fontFamily: 'monospace',
    fontSize: '20px',
  };
  // const { item } = props
  const { item } = props;
  return (
    <div className="view-talk">
      <p style={styles}>
      Talk Title:
        { item.talkTitle }
        <br />
        Presenter Name:
        { item.presenterName }
        <br />
        Venue:
        { item.venue }
        <br />
        organization:
        { item.organization }
        <br />
        Talk Date:
        { item.talkDate }
        <br />
        Talk Duration:
        { item.talkDuration }
        <br />
      </p>
    </div>
  );
};
export default ViewTalk;
