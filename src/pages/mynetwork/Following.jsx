import { NetworkCard } from "../../components";
import { useSelector } from "react-redux";
const Following = () => {
  const { user } = useSelector((store) => store.authSlice);
  return (
    <div>
      {user.following.length === 0 && (
        <div className="text-center p-10">You are not following anyone</div>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {user.following.map((user) => {
          return <NetworkCard currentUser={user} key={user._id} />;
        })}
      </div>
    </div>
  );
};
export { Following };
