import React, { useContext, useRef, useEffect } from "react";
import { SocketContext } from "../../context/socket";
import AxiosClient from "../../api";
import { listApiMessages } from "../../constants/routesApi";
import { useSelector } from "react-redux";

// import PropTypes from 'prop-types'
const SendMessage = () => {
  const socket = useContext(SocketContext);
  const ref = useRef();
  const channel = useSelector((state) => state.chat.channel);
  const user = useSelector((state) => state.app.user);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleMessages = (e) => {
    if (e.code === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        const message = e.target.innerText;
        if (message) {
          const params = {
            text: message,
            from: user?._id,
            channelId: channel?._id,
          };
          socket.emit("send-message", params);
          AxiosClient.post(listApiMessages.save, params);
        }
        ref.current.innerText = "";
      }
    }
  };
  return (
    <div
      className="h-full  rounded-2xl border-none outline-none p-3 bg-gray-200 w-full overflow-y-auto"
      data-text="Type message..."
      contentEditable
      onKeyPress={handleMessages}
      ref={ref}
    />
  );
};

export default SendMessage;
