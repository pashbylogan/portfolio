import React from "react";

const Iframe = ({ url, title }) => {
  return (
    <iframe
      src={url}
      title={title}
      style={{ position: 'absolute', height: '100%', width: '100%' }}
      frameBorder="0"
    />
  );
};

export default Iframe;
