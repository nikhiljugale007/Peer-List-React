import { NetworkCard } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const Following = () => {
  const { authState } = useAuthContext();
  return (
    <div>
      {authState.user.following.length === 0 && (
        <div className="text-center p-10">You are not following anyone</div>
      )}
      {authState.user.following.map((user) => {
        return <NetworkCard user={user} key={user._id} />;
      })}
    </div>
  );
};
export { Following };
