/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/socket";
// import { messages } from "../../data";
import Scrollbar from "../Scrollbar";
import PropTypes from "prop-types";
import _format from "date-fns/format";

function Messages(props) {
  const { messages } = props;
  const idLogin = useSelector((state) => state.app.user?._id);
  // const socket = useContext(SocketContext);
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on("receive-message", (data) => {
  //     console.log("useEffect ~ data", data);
  //     setMessages((prev) => [...prev, data]);
  //   });
  // }, []);

  return messages.length > 0 ? (
    <Scrollbar
      style={{
        height: "inherit",
        padding: 12,
      }}
    >
      {messages.map((item) => (
        <div
          className={`flex ${
            item?.from === idLogin ? "justify-end" : "justify-start"
          } items-center py-3`}
          key={item?._id}
        >
          <span className="text-gray-300 text-sm px-4">
            {_format(new Date(item?.time), "HH:mm")}
          </span>
          <div
            className={`${
              item?.from === idLogin
                ? "bg-blue-400 text-white"
                : "bg-gray-300 text-black"
            } p-4 rounded-xl`}
          >
            {item?.text}
          </div>
        </div>
      ))}
    </Scrollbar>
  ) : (
    <></>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;
