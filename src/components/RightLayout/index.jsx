import { faPhoneAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Scrollbar from "../Scrollbar";
import SendMessage from "../SendMessage";
// import PropTypes from 'prop-types'

function RightLayout(props) {
  return (
    <div className="relative h-full flex flex-col">
      <div className="flex py-2">
        <div className="w-12 h-12 rounded-full mr-4">
          <img
            src={`https://i.pravatar.cc/150?img=1`}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-base font-extrabold">John Smith</h2>
          <p className="text-green-500">Online</p>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-xl text-gray-500 mr-4"
          />
          <FontAwesomeIcon icon={faSearch} className="text-xl text-gray-500" />
        </div>
      </div>
      <Scrollbar style={{ height: "inherit", boder: "1px solid #000" }}>
        Haha
      </Scrollbar>
      <div className="absolute bottom-0 w-full h-16">
        <SendMessage />
      </div>
    </div>
  );
}

RightLayout.propTypes = {};

export default RightLayout;
