import { faPhoneAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import Messages from '../../../components/Messages';
import SendMessage from '../../../components/SendMessage';
import { eStatus } from '../../../data';

function Chats() {
  const messages = useSelector((state) => state.chat.data);
  const user = useSelector((state) => state.chat.user);

  const firstCase = (text) => {
    if (!text) return '';
    const [first, ...rest] = text;
    return `${first.toUpperCase()}${rest.join('')}`;
  };

  return user ? (
    <div className="flex flex-col h-full">
      <div className="flex py-2">
        <div className="w-12 h-12 rounded-full mr-4">
          <img
            src={user?.avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-base font-extrabold">{user?.fullname}</h2>
          <p className={`text-${eStatus[user?.status]}`}>
            {firstCase(user?.status)}
          </p>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-xl text-gray-500 mr-4 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faVideo}
            className="text-xl text-gray-500 cursor-pointer"
          />
        </div>
      </div>
      {/* <div className="flex-grow"> */}
      <Messages messages={messages} user={user} />
      {/* </div> */}

      <div className="p-4 h-24 shadow-lg rounded-l-xl rounded-r-xl">
        <SendMessage />
      </div>
    </div>
  ) : (
    <div />
  );
}

Chats.propTypes = {};

export default Chats;
