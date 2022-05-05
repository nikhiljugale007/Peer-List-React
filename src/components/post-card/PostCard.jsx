import "./PostCard.css";
import { avatar } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { PostApi } from "../../apicalls/PostApi";
import { useAppContext } from "../../context/AppContext";
import {
  ThumbUpIcon,
  BookmarkIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { DeleteApi } from "../../apicalls/DeleteApi";
import { EditPostModal } from "../modal/EditPostModal";

const PostCard = ({ post, cardType }) => {
  const { username, content, updatedAt, likes, userId, media, _id } = post;
  const [expandPost, setExpandPost] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const { authState, authDispatch } = useAuthContext();
  const { appDispatch } = useAppContext();
  const checkUserIsFollowed = () => {
    return (
      authState.user.following.find((user) => user.username === username) ||
      username === authState.user.username
    );
  };

  const followUser = async () => {
    const res = await PostApi(`/api/users/follow/${userId}`, {}, true);
    if (res.success) {
      authDispatch({ type: "UPDATE_USER", payload: res.data.user });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const unfollowUser = async () => {
    const res = await PostApi(`/api/users/unfollow/${userId}`, {}, true);
    if (res.success) {
      authDispatch({ type: "UPDATE_USER", payload: res.data.user });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const likePost = async () => {
    const { data, success } = await PostApi(`/api/posts/like/${_id}`, {}, true);
    if (success) {
      appDispatch({ type: "SET_FEED", payload: data.posts });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const dislikePost = async () => {
    const { data, success } = await PostApi(
      `/api/posts/dislike/${_id}`,
      {},
      true
    );
    if (success) {
      appDispatch({ type: "SET_FEED", payload: data.posts });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const bookmarkPost = async () => {
    const { data, success } = await PostApi(
      `api/users/bookmark/${_id}`,
      {},
      true
    );
    if (success) {
      authDispatch({ type: "UPDATE_USER_BOOKMARK", payload: data.bookmarks });
    } else {
      alert("Some error occurred, check console.");
    }
  };
  const removeBookmarkPost = async () => {
    const { data, success } = await PostApi(
      `api/users/remove-bookmark/${_id}`,
      {},
      true
    );
    if (success) {
      authDispatch({ type: "UPDATE_USER_BOOKMARK", payload: data.bookmarks });
    } else {
      alert("Some error occurred, check console.");
    }
  };

  const deletePost = async () => {
    const { data, success } = await DeleteApi(`/api/posts/${_id}`, true);
    if (success) {
      appDispatch({ type: "SET_FEED", payload: data.posts });
      const updatedUserPosts = data.posts.filter(
        (post) => post.userId === authState.user._id
      );
      authDispatch({ type: "UPDATE_USER_POSTS", payload: updatedUserPosts });
    } else {
      alert("Some error occurred, check console.");
    }
  };

  const editPost = () => {
    setShowEditPostModal(true);
  };
  const checkLikedPost = () => {
    const likedArray = likes.likedBy.filter(
      (user) => user._id === authState.user._id
    );
    if (likedArray.length === 0) return false;
    else return true;
  };
  const checkBookmarkedPost = () => {
    const bookmaredArray = authState.user.bookmarks.filter(
      (post) => post._id === _id
    );
    if (bookmaredArray.length === 0) return false;
    else return true;
  };
  const checkPostIdOfLoggedUser = () => {
    return userId === authState.user._id;
  };

  return (
    <div className=" p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color w-full">
      {showEditPostModal && (
        <EditPostModal
          setShowEditPostModal={setShowEditPostModal}
          post={post}
        />
      )}
      <div className="flex flex-row items-center justify-between ">
        <Link
          to={`/profile/${userId}`}
          className="flex flex-row items-center gap-5"
        >
          <img src={avatar} alt="profile-pic" className="h-14 w-14" />
          <div className="flex flex-col">
            <p className="text-lg">{"@" + username}</p>
            <p className="text-xs text-gray-600">{updatedAt}</p>
          </div>
        </Link>
        {checkPostIdOfLoggedUser() && (
          <div className="flex flex-row">
            <button onClick={deletePost}>
              <TrashIcon className="p-2 h-10 w-10 hover:bg-hover-color rounded-full" />
            </button>
            <button onClick={editPost}>
              <PencilAltIcon className="p-2 h-10 w-10 hover:bg-hover-color rounded-full" />
            </button>
          </div>
        )}

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
              className="border p-1 px-2 rounded-md hover:bg-hover-color"
            >
              Follow
            </button>
          ))}
      </div>
      <div>
        <p>{media ? "MEDIA" : "NO MEDIA"}</p>
        <p className={expandPost ? "" : "text-ellipsis max-h-24 "}>{content}</p>
        <Link to={`/scroll/post/${_id}`}>
          <button
            className="text-primary-color py-1 outline-none"
            onClick={() => setExpandPost((prev) => !prev)}
          >
            {/* {expandPost ? "Read Less" : "Read More"} */}
            Show More
          </button>
        </Link>
      </div>
      <div className="flex flex-row gap-20">
        {checkLikedPost() ? (
          <div
            className="flex flex-row items-center cursor-pointer gap-2"
            onClick={dislikePost}
          >
            <ThumbUpIcon className="p-2 h-10 w-10 stroke-primary-color  hover:bg-hover-color rounded-full" />
            <p>{likes.likedBy.length}</p>
          </div>
        ) : (
          <div
            className="flex flex-row items-center cursor-pointer gap-2 "
            onClick={likePost}
          >
            <ThumbUpIcon className="p-2 h-10 w-10  hover:bg-hover-color rounded-full" />
            <p>{likes.likedBy.length}</p>
          </div>
        )}
        {checkBookmarkedPost() ? (
          <div
            className="flex flex-row items-center cursor-pointer gap-2"
            onClick={removeBookmarkPost}
          >
            <BookmarkIcon className="p-2 h-10 w-10  stroke-primary-color  hover:bg-hover-color rounded-full cursor-pointer" />
          </div>
        ) : (
          <div
            className="flex flex-row items-center cursor-pointer gap-2 "
            onClick={bookmarkPost}
          >
            <BookmarkIcon className="p-2 h-10 w-10  hover:bg-hover-color rounded-full cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
