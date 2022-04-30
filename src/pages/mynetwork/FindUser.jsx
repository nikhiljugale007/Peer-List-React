import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { NetworkCard, SpinLoder } from "../../components";

const FindUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const { data, success } = await GetApi("/api/users", false);
      if (success) {
        setAllUsers(data.users);
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
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {allUsers.map((user) => (
            <NetworkCard user={user} key={user._id} />
          ))}
        </div>
      )}
    </div>
  );
};
export { FindUser };
