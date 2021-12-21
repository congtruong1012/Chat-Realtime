import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// import avatar from "../../images/thuychi.jpg";
import PropTypes from "prop-types";
import { eStatus } from "../../data";
import AxiosClient from "../../api";
import { listApiUsers } from "../../constants/routesApi";
import { useDispatch } from "react-redux";
import { getMessages } from "../../containers/Features/Chats/chatSlice";

function User(props) {
  const { channel, idLogin } = props;
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading((prev) => !prev);
        const members = channel?.members || [];
        const userId = members.find((item) => item !== idLogin);
        const res = await AxiosClient.get(listApiUsers.detail, {
          params: {
            userId,
          },
        });
        setUser(res.data);
        setIsLoading((prev) => !prev);
      } catch (error) {
        console.log("Lỗi rồi");
        setIsLoading((prev) => !prev);
      }
    })();
  }, []);

  const getChats = () => {
    console.log("channel", channel);
    dispatch(getMessages({...user, channelId: channel?._id}));
  };

  return (
    <div
      onClick={getChats}
      className="flex items-center cursor-pointer py-2 px-4 rounded-sm hover:bg-gray-100"
    >
      <div
        className={`relative w-12 h-12 rounded-full mr-4 ${
          isLoading ? "bg-gray-100 text-red-100" : ""
        }`}
      >
        <img src={user?.avatar} alt="" className="w-full h-full rounded-full" />
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white shadow-lg  ${
            eStatus.online
          }`}
        ></div>
      </div>
      <div className="flex-grow">
        <div className=" flex justify-between">
          <h2
            className={`text-xl font-extrabold ${
              isLoading ? "bg-gray-400 text-gray-100 h-1/2 w-1" : ""
            }`}
          >
            {user?.fullname}
          </h2>
          {/* <div className="text-sm">
            <FontAwesomeIcon icon={faCheck} className=" text-gray-300 mr-2" />
            <span className=" text-gray-300">{user.seen}</span>
          </div> */}
        </div>
        {/* <p className="text-sm text-gray-500">{user.message}</p> */}
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
