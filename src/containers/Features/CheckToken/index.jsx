import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckToken = function (props) {
  const isLogin = useSelector((state) => state.login.isLogin);
  return isLogin ? <Redirect to="/" /> : <Route {...props} />;
};

CheckToken.propTypes = {
  children: PropTypes.node,
};

export default CheckToken;
