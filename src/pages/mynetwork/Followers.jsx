import { NetworkCard } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const Followers = () => {
  const { authState } = useAuthContext();
  return (
    <div>
      {authState.user.followers.length === 0 && (
        <div className="text-center p-10">
          You do not have any followers yet.
        </div>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {authState.user.followers.map((user) => {
          return <NetworkCard user={user} key={user._id} />;
        })}
      </div>
    </div>
  );
};
export { Followers };
