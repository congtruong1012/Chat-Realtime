import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
import User from "../User";
import { iconsBottom, users } from "../../data";
import Scrollbar from "../Scrollbar";
// import PropTypes from "prop-types";

function LeftLayout(props) {
  return (
    <div className="h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-extrabold text-3xl">Chats</h2>
        <FontAwesomeIcon icon={faEdit} className="text-3xl cursor-pointer" />
      </div>
      <div className="relative mb-8">
        <input
          className="rounded-2xl border-none outline-none pl-14 py-2 bg-gray-100 w-full"
          placeholder={`Search for chats & messages`}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-300"
        />
      </div>
      <Scrollbar style={{ height: "inherit" }}>
        {users.map((item, index) => (
          <User key={String(index)} user={item} />
        ))}
      </Scrollbar>
      <div className="h-12"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-white z-10">
        <div className="flex justify-between py-2">
          {iconsBottom.map((item, index) => (
            <FontAwesomeIcon
              key={String(index)}
              icon={item.icon}
              className={`text-2xl cursor-pointer ${
                item.isActive ? "text-yellow-500" : "text-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

LeftLayout.propTypes = {};

export default LeftLayout;
