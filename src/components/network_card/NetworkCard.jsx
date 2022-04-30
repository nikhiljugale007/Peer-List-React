import { Link } from "react-router-dom";
import { PostApi } from "../../apicalls/PostApi";
import { avatar } from "../../assets";
import { useAuthContext } from "../../context/AuthContext";
import "./NetworkCard.css";
const NetworkCard = ({ user }) => {
  const { firstName, lastName, about, username, _id } = user;
  const { authState, authDispatch } = useAuthContext();
  const checkUserIsFollowed = () => {
    return (
      authState.user.following.find((user) => user.username === username) ||
      username === authState.user.username
    );
  };
  const followUser = async () => {
    const res = await PostApi(`/api/users/follow/${_id}`, {}, true);
    if (res.success) {
      authDispatch({ type: "UPDATE_USER", payload: res.data.user });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const unfollowUser = async () => {
    const res = await PostApi(`/api/users/unfollow/${_id}`, {}, true);
    if (res.success) {
      authDispatch({ type: "UPDATE_USER", payload: res.data.user });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  return (
    <Link
      to={`/profile/${_id}`}
      className="flex flex-col gap-2 px-4 py-2 border m-2 rounded-md cursor-pointer"
    >
      <div className="flex flex-row justify-between">
        <img src={avatar} alt="profile-pic" className="h-10 w-10 " />
        {!(username === authState.user.username) &&
          (checkUserIsFollowed() ? (
            <button
              onClick={unfollowUser}
              className="border p-1 px-2 rounded-md hover:bg-hover-color"
            >
              UnFollow
            </button>
          ) : (
            <button
              onClick={followUser}
              className="border p-1 px-2 rounded-md hover:bg-hover-color text-primary-bg-color bg-secondary-bg-color"
            >
              Follow
            </button>
          ))}
      </div>
      <div>
        <p className="font-semibold">{firstName + " " + lastName}</p>
        <p className="text-sm text-ellipsis">
          {about === undefined ? "No about section provided " : about}
        </p>
      </div>
    </Link>
  );
};
export { NetworkCard };
