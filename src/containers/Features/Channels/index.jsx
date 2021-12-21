/* eslint-disable react-hooks/exhaustive-deps */
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Scrollbar from "../../../components/Scrollbar";
import User from "../../../components/User";
import { iconsBottom, users } from "../../../data";
import { logout } from "../../Pages/Login/loginSlice";
import { getChannel } from "./channelsSlice";
// import PropTypes from 'prop-types'

function Channels(props) {
  const dispatch = useDispatch();
  const idLogin = useSelector((state) => state.app?.user?._id);
  const channels = useSelector((state) => state.channels.channels);

  useEffect(() => {
    dispatch(getChannel({ userId: idLogin }));
  }, [idLogin]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-extrabold text-3xl">Chats</h2>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="text-3xl cursor-pointer"
          onClick={handleLogout}
        />
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
        {channels.map((item, index) => (
          <User key={String(index)} channel={item} idLogin={idLogin} />
        ))}
      </Scrollbar>
      <div className="h-24 rounded-l-xl rounded-r-xl bg-white z-10">
        <div className="flex justify-between items-center p-2 h-full">
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
    </>
  );
}

Channels.propTypes = {};

export default Channels;
