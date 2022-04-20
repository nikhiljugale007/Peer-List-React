import "./PostCard.css";
import { avatar, Icon_delete } from "../../assets";
import { icon_like, icon_comment } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { PostApi } from "../../apicalls/PostApi";
const PostCard = ({ post, deleteCard, cardType }) => {
  const { username, content, updatedAt, likes, userId } = post;
  const [expandPost, setExpandPost] = useState(false);
  const { authState } = useAuthContext();
  const checkUserIsFollowed = () => {
    return (
      authState.user.following.find((user) => user.username === username) ||
      username === authState.user.username
    );
  };

  const followUser = async () => {
    const res = await PostApi(`/api/users/follow/${userId}`, {}, true);
    console.log(res);
  };

  return (
    <div className=" p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color w-full">
      <div className="flex flex-row items-center justify-between ">
        <Link
          to={`/profile/${userId}`}
          className="flex flex-row items-center gap-5"
        >
          <img src={avatar} alt="profile-pic" className="h-14 w-14" />
          <div className="flex flex-col">
            <p className="text-lg">{"@" + username}</p>
            <p className="text-xs text-gray-600">
              {/* 13 Apr, 2022 • About 1 hour ago */}
              {updatedAt}
            </p>
          </div>
        </Link>
        {cardType === "DELETE_CARD" && (
          <img
            src={Icon_delete}
            alt="delete"
            className="hover:bg-hover-color p-2 rounded-full"
          />
        )}
        {cardType === "FOLLOW_CARD" && !checkUserIsFollowed() && (
          <button onClick={followUser}>Follow</button>
        )}
      </div>
      <div>
        <p className={expandPost ? "" : "text-ellipsis max-h-24"}>{content}</p>
        <button
          className="text-primary-color py-1 outline-none"
          onClick={() => setExpandPost((prev) => !prev)}
        >
          {expandPost ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="flex flex-row gap-20">
        <div className="flex flex-row items-center">
          <img
            src={icon_like}
            alt="like"
            className="hover:cursor-pointer hover:bg-hover-color p-2 rounded-full"
          />
          <p>{likes.likedBy.length}</p>
        </div>
        <img
          src={icon_comment}
          alt="comment"
          className="hover:cursor-pointer hover:bg-hover-color p-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default PostCard;
