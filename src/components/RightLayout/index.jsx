import PropTypes from 'prop-types';
import React from 'react';

function RightLayout(props) {
  const { children } = props;
  return <div className="h-full flex flex-col">{children}</div>;
}

RightLayout.propTypes = {
  children: PropTypes.node,
};

export default RightLayout;
