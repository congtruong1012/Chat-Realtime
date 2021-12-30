import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';

export const SocketContext = createContext();

function SocketProvider({ children }) {
  const socket = socketIOClient('http://localhost:4000');

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.node,
};

export default SocketProvider;
