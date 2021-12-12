import React from "react";
// import PropTypes from 'prop-types'

function SendMessage(props) {
  return (
    <div
      className="h-full  rounded-2xl border-none outline-none p-3 bg-gray-200 w-full overflow-y-auto"
      data-text="Type message..."
      contentEditable
    ></div>
  );
}

SendMessage.propTypes = {};

export default SendMessage;
