import React from 'react';

const ErrorComponent = props => {
  const { error } = props;
  return <div className="error">{JSON.stringify(error)}</div>;
};

export default ErrorComponent;
