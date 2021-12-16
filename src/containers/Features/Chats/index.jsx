import React from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Messages from '../../../components/Messages';
import SendMessage from '../../../components/SendMessage';

function Chats(props) {
  return (
    <>
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
      <Messages />
      <div className="p-4 h-24 shadow-lg rounded-l-xl rounded-r-xl">
        <SendMessage />
      </div>
    </>
  );
}

Chats.propTypes = {

}

export default Chats

