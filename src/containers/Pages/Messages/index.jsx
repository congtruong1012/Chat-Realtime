import React from "react";
// import PropTypes from "prop-types";
import CommonLayout from "../../../components/CommonLayout";
import Channels from "../../Features/Channels";
import Chats from "../../Features/Chats";

function Messages(props) {
  return <CommonLayout left={<Channels />} right={<Chats />} border />;
}

Messages.propTypes = {};

export default Messages;