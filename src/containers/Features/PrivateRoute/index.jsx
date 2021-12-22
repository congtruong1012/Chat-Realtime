/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = function (props) {
  const isLogin = useSelector((state) => state.login.isLogin);

  return isLogin ? <Route {...props} /> : <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

/**
 import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import jwt from 'jwt-decode';

export const PrivateRoute = (props: RouteProps) => {
  const token = localStorage.getItem('token');
  const verifyToken = token && jwt(token);

  if (!token || !verifyToken) return <Redirect to="/login" />;
  return <Route {...props} />;
};
 */
