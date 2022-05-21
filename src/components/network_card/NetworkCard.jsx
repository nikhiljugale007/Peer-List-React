import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostApi } from "../../apicalls/PostApi";
import { avatar } from "../../assets";
import { updateUser } from "../../redux/authSlice";
import "./NetworkCard.css";
const NetworkCard = ({ currentUser }) => {
  const { firstName, lastName, about, username, _id } = currentUser;
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.authSlice);
  const checkUserIsFollowed = () => {
    return (
      user.following.find(
        (userFollowing) => userFollowing.username === username
      ) || username === user.username
    );
  };
  const followUser = async () => {
    const res = await PostApi(`/api/users/follow/${_id}`, {}, true);
    if (res.success) {
      dispatch(updateUser({ user: res.data.user }));
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const unfollowUser = async () => {
    const res = await PostApi(`/api/users/unfollow/${_id}`, {}, true);
    if (res.success) {
      dispatch(updateUser({ user: res.data.user }));
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
        {!(username === user.username) &&
          (checkUserIsFollowed() ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                unfollowUser();
              }}
              className="border p-1 px-2 rounded-md hover:bg-bg-black text-primary-bg-color bg-secondary-bg-color"
            >
              UnFollow
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                followUser();
              }}
              className="border p-1 px-2 rounded-md hover:bg-bg-black text-primary-bg-color bg-secondary-bg-color"
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
