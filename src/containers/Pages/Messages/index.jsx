import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from "prop-types";
import CommonLayout from '../../../components/CommonLayout';
import { SocketContext } from '../../../context/socket';
import Channels from '../../Features/Channels';
import Chats from '../../Features/Chats';

function Messages() {
  const socket = useContext(SocketContext);
  const idLogin = useSelector((state) => state.app.user?._id);

  useEffect(() => {
    socket.emit('add-user', idLogin);
  }, []);

  return <CommonLayout left={<Channels />} right={<Chats />} border />;
}

Messages.propTypes = {};

export default Messages;
