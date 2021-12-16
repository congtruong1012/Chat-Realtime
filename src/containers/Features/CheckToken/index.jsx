import React from "react";
import PropTypes from "prop-types";
import { getCookie } from "../../../utils/cookie";
import { Navigate } from "react-router-dom";

function CheckToken(props) {
  const { children } = props;
  const token = getCookie("token");
  return token ? <Navigate to="/" /> : children;
}

CheckToken.propTypes = {
  children: PropTypes.node,
};

export default CheckToken;
