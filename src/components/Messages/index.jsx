import React from "react";
import { messages } from "../../data";
import Scrollbar from "../Scrollbar";
// import PropTypes from 'prop-types'

function Messages(props) {
  return (
    <Scrollbar
      style={{
        height: "inherit",
        padding: 12,
      }}
    >
      {messages.map((item) => (
        <div
          className={`flex ${
            item.isYou ? "justify-end" : "justify-start"
          } items-center py-3`}
        >
          <span className="text-gray-300 text-sm px-4">{item.time}</span>
          <div
            className={`${
              item.isYou ? "bg-blue-400 text-white" : "bg-gray-300 text-black"
            } p-4 rounded-xl`}
          >
            {item.messages}
          </div>
        </div>
      ))}
    </Scrollbar>
  );
}

Messages.propTypes = {};

export default Messages;
