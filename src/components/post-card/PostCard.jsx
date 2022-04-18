import "./PostCard.css";
import { avatar } from "../../assets";
import { icon_like, icon_comment } from "../../assets";
import { useState } from "react";
const PostCard = ({ post }) => {
  const { username, content, updatedAt, likes } = post;
  const [expandPost, setExpandPost] = useState(false);
  console.log(likes);
  return (
    <div className=" p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color w-full">
      <div className="flex flex-row gap-5 items-center ">
        <img src={avatar} alt="profile-pic" className="h-14 w-14" />
        <div className="flex flex-col">
          <p className="text-lg">Amit Wani {"@" + username}</p>
          <p className="text-xs text-gray-600">
            {/* 13 Apr, 2022 • About 1 hour ago */}
            {updatedAt}
          </p>
        </div>
      </div>
      <div>
        <p className={!expandPost && "max-h-24 " + "text-ellipsis"}>
          {content}
        </p>
        <button
          className="text-primary-color py-1 outline-none"
          onClick={() => setExpandPost((prev) => !prev)}
        >
          {expandPost ? "Read less" : "Read more"}
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
