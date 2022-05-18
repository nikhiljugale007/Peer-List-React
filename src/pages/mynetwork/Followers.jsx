import { NetworkCard } from "../../components";
import { useSelector } from "react-redux";
const Followers = () => {
  const { user } = useSelector((store) => store.authSlice);
  return (
    <div>
      {user.followers.length === 0 && (
        <div className="text-center p-10">
          You do not have any followers yet.
        </div>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {user.followers.map((user) => {
          return <NetworkCard currentUser={user} key={user._id} />;
        })}
      </div>
    </div>
  );
};
export { Followers };
