import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { NetworkCard, SpinLoder } from "../../components";
import { SearchIcon } from "@heroicons/react/outline";

const FindUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchUserName, setSearchUserName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchUser = (e) => {
    e.preventDefault();
    const searchFilterdData = allUsers.filter((user) =>
      user.username.toLowerCase().includes(searchUserName.toLowerCase())
    );
    setFilteredData(searchFilterdData);
    setSearchUserName("");
  };
  useEffect(() => {
    const getUsers = async () => {
      const { data, success } = await GetApi("/api/users", false);
      if (success) {
        setAllUsers(data.users);
        setFilteredData(data.users);
      } else {
        alert("Something went wrong,check console ");
      }
    };
    setLoading(true);
    getUsers();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="">
      <div className="">
        <div className="flex items-center">
          <div className="relative  border-2 bg-gray-50 rounded m-2">
            <form onSubmit={searchUser}>
              <input
                type="text"
                id="search-user-form"
                className="h-12 w-70 pl-10 pr-20 rounded z-0 focus:shadow focus:outline-none bg-gray-50"
                placeholder="Enter username to search"
                value={searchUserName}
                onChange={(e) => setSearchUserName(e.target.value)}
              />
              <div className="absolute top-2 right-2 h-8 flex flex-col justify-center">
                <button type="submit">
                  <SearchIcon className="h-6 w-6" />
                </button>
              </div>
            </form>
          </div>
          <button
            className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
            onClick={() => {
              setFilteredData(allUsers);
              setSearchUserName("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {filteredData.length === 0 && (
            <div className="text-center p-10">No User Found</div>
          )}
          {filteredData.map((user) => (
            <NetworkCard currentUser={user} key={user._id} />
          ))}
        </div>
      )}
    </div>
  );
};
export { FindUser };
