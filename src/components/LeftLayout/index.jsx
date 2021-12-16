import React from "react";
import PropTypes from "prop-types";

function LeftLayout(props) {
  const { children } = props;
  return <div className="h-full flex flex-col relative">{children}</div>;
}

LeftLayout.propTypes = {
  children: PropTypes.node,
};

export default LeftLayout;
