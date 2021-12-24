import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AxiosClient from "../../api";
import Scrollbar from "../Scrollbar";
// import PropTypes from 'prop-types'

function AutocompleteSearch(props) {
  // const user = useSelector(state => state)
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearchUser = (e) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      AxiosClient.get("/api/users")
        .then((res) => res.data)
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="relative mb-8">
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
      {search && (
        <div className="absolute w-full h-60 z-30 rounded-md bg-white shadow-md">
          <Scrollbar style={{ height: "inherit", padding: "8px 0" }}>
            {users.map((user, i) => (
              <div
                key={String(i)}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              >
                <div className=" w-10 h-10  mx-2">
                  <img
                    src={user?.avatar || ""}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className="flex-1 px-2">{user?.fullname || ""}</div>
              </div>
            ))}
          </Scrollbar>
        </div>
      )}
    </div>
  );
}

AutocompleteSearch.propTypes = {};

export default AutocompleteSearch;
