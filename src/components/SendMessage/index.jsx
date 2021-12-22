import { format } from "date-fns";
import React, { useContext, useRef } from "react";
import { SocketContext } from "../../context/socket";

// import PropTypes from 'prop-types'

let SendMessage = function (props) {
  let isYou = true;
  const socket = useContext(SocketContext);
  const ref = useRef();

  const generateId = () => {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };

  const handleMessages = (e) => {
    if (e.code === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        const message = e.target.innerText;
        console.log("handleMessages ~ message", message);
        if (message) {
        { socket.emit("send-message", {
            id: generateId(),
            messages: message,
            time: format(new Date(), "HH:mm"),
            isYou,
          });
        }
        isYou = !isYou;
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

SendMessage.propTypes = {};

export default SendMessage;
