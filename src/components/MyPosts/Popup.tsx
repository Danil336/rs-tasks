import React from 'react';

const Popup = (props: { message: string }) => {
  return <div className="popup">{props.message}</div>;
};

export default Popup;
