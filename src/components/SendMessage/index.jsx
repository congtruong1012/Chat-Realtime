import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../../containers/Features/Chats/chatSlice";
import { SocketContext } from "../../context/socket";

// import PropTypes from 'prop-types'
const SendMessage = () => {
  const socket = useContext(SocketContext);
  const ref = useRef();
  const channel = useSelector((state) => state.chat.channel);
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleMessages = (e) => {
    if (e.code === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        const message = e.target.innerText;
        if (message) {
          const receiveId = (channel?.members || []).find(
            (item) => item !== user?._id
          );
          console.log("handleMessages ~ receiveId", receiveId);
          const params = {
            text: message,
            from: user?._id,
            to: receiveId,
            channelId: channel?._id,
          };
          socket.emit("send-message", params);
          dispatch(saveMessage(params));
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
