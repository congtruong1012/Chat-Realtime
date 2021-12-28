/* eslint-disable react-hooks/exhaustive-deps */
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutocompleteSearch from "../../../components/AutocompleteSearch";
import Scrollbar from "../../../components/Scrollbar";
import User from "../../../components/User";
import { iconsBottom, users } from "../../../data";
import { logout } from "../../Pages/Login/loginSlice";
import { getChannel } from "./channelsSlice";
import { SocketContext } from "../../../context/socket";
// import PropTypes from 'prop-types'

const Channels = function (props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app?.user);
  const channels = useSelector((state) => state.channels.channels);
  const socket = useContext(SocketContext);
  const [usersOnline, setUserOnline] = useState([]);
  useEffect(() => {
    if (user?._id) dispatch(getChannel({ userId: user?._id }));
  }, [user?._id]);

  useEffect(() => {
    socket.on("get-users", (data) => setUserOnline(data));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img
            src={user?.avatar}
            alt={user?.fullname}
            className="h-full w-full"
          />
        </div>
        <h2 className="font-extrabold text-3xl">Chats</h2>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="text-3xl cursor-pointer"
          onClick={handleLogout}
        />
      </div>
      <AutocompleteSearch />
      <Scrollbar style={{ height: "inherit" }}>
        {channels.map((item, index) => (
          <User
            key={String(index)}
            channel={item}
            idLogin={user?._id}
            usersOnline={usersOnline}
          />
        ))}
      </Scrollbar>
      <div className="h-24 rounded-l-xl rounded-r-xl bg-white z-10">
        <div className="flex justify-between items-center p-2 h-full">
          {iconsBottom.map((item, index) => (
            <div
              className={`text-center cursor-pointer ${
                item.isActive ? "text-yellow-500" : "text-gray-500"
              }`}
              key={String(index)}
            >
              <FontAwesomeIcon
                key={String(index)}
                icon={item.icon}
                className={`text-2xl `}
              />
              <span className="text-xs mt-1 block">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Channels.propTypes = {};

export default Channels;
