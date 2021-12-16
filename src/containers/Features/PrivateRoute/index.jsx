import React from "react";
import PropTypes from "prop-types";
import { getCookie } from "../../../utils/cookie";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const { children } = props;
  const token = getCookie("token");
  return token ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
