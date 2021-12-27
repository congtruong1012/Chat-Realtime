import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../containers/Features/Chats/chatSlice";
import { getUsers, resetData } from "../../containers/Features/Users/userSlice";
import Scrollbar from "../Scrollbar";
// import PropTypes from 'prop-types'

function AutocompleteSearch(props) {
  // const user = useSelector(state => state)
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const users = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);

  const dispatch = useDispatch();

  const handleSearchUser = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      if (search) {
        dispatch(getUsers({ name: search }));
        setOpen(true);
      } else {
        dispatch(resetData());
        setOpen(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  const openChat = (user) => {
    dispatch(getMessages({ ...user }));
    setSearch("");
  };

  return (
    <div className="relative mb-4">
      <input
        className="rounded-2xl border-none outline-none pl-14 py-2 bg-gray-100 w-full"
        placeholder="Search for friends "
        value={search}
        onChange={handleSearchUser}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-300"
      />
      {open && (
        <div className="absolute w-full h-60 z-30 rounded-md bg-white shadow-md">
          <Scrollbar style={{ height: "inherit", padding: "8px 0" }}>
            {isLoading ? (
              Array.from(Array(5)).map((user, i) => (
                <div
                  key={String(i)}
                  className="flex items-center p-2 cursor-pointer"
                >
                  <div className=" w-10 h-10 mx-2 bg-gray-100 rounded-full"></div>
                  <div className="px-2 bg-gray-100 h-6 w-3/4 mx-auto"></div>
                </div>
              ))
            ) : (
              <>
                {users.length > 0 ? (
                  users.map((user, i) => (
                    <div
                      key={String(i)}
                      className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => openChat(user)}
                    >
                      <div className=" w-10 h-10  mx-2">
                        <img
                          src={user?.avatar || ""}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 px-2">{user?.fullname || ""}</div>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center ">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-gray-200 text-7xl mb-3"
                      />
                      <div className="text-gray-500">No user found</div>
                    </div>
                  </div>
                )}
              </>
            )}
          </Scrollbar>
        </div>
      )}
    </div>
  );
}

AutocompleteSearch.propTypes = {};

export default AutocompleteSearch;
