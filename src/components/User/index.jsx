import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import avatar from "../../images/thuychi.jpg";
import PropTypes from "prop-types";
import { eStatus } from "../../data";

function User(props) {
  const { user } = props;
  return (
    <div className="flex cursor-pointer py-2 px-4 rounded-sm hover:bg-gray-100">
      <div className="relative w-12 h-12 rounded-full mr-4">
        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt="avatar"
          className="w-full h-full rounded-full"
        />
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white shadow-lg  ${
            eStatus[user.status]
          }`}
        ></div>
      </div>
      <div className="flex-grow">
        <div className=" flex justify-between">
          <h2 className="text-base font-extrabold">{user.name}</h2>
          <div className="text-sm">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-300 mr-2" />
            <span className=" text-gray-300">{user.seen}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{user.message}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
