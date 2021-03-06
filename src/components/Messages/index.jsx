import _format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessages } from '../../containers/Features/Chats/chatSlice';
import { SocketContext } from '../../context/socket';
// import { messages } from "../../data";
import Scrollbar from '../Scrollbar';

function Messages(props) {
  const { messages } = props;
  const ref = useRef();
  const idLogin = useSelector((state) => state.app.user?._id);
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('receive-message', (data) => {
      dispatch(updateMessages(data));
    });
  }, []);

  useEffect(() => {
    if (ref.current)
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
  }, [messages.length]);

  return (
    <Scrollbar
      style={{
        height: 'inherit',
        padding: 12,
        // flexGrow: 1,
      }}
      itemRef={ref}
    >
      {messages.length > 0 ? (
        <div ref={ref}>
          {messages.map((item) => (
            <div
              className={`flex ${
                item?.from === idLogin ? 'justify-end' : 'justify-start'
              } items-center py-3`}
              key={item?._id}
            >
              <span className="text-gray-300 text-sm px-4">
                {_format(new Date(item?.time), 'HH:mm')}
              </span>
              <div
                className={`${
                  item?.from === idLogin
                    ? 'bg-blue-400 text-white'
                    : 'bg-gray-300 text-black'
                } p-4 rounded-xl`}
              >
                {item?.text}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}
    </Scrollbar>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;
