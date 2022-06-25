import { avatar } from "../../assets";
import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";

import { PostApi } from "../../apicalls/PostApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommentList } from "../../redux/commentSlice";
import { useNavigate } from "react-router-dom";
import {
  checkPostDownVotedByLoggedUser,
  checkPostIdOfLoggedUser,
  checkPostUpVotedByLoggedUser,
  getDateDifferance,
} from "../../utility/commonFunctions";
const CommentCard = ({ comment, postId }) => {
  const { text, username, votes, updatedAt, _id, userId } = comment;
  const { user } = useSelector((store) => store.authSlice);
  const [editComment, setEditComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const upVotePost = async (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const { data, success, status } = await PostApi(
      `/api/comments/upvote/${postId}/${_id}`,
      {},
      true
    );
    if (success) {
      dispatch(setCommentList({ commentList: data.comments }));
    } else {
      if (status === 400) {
        alert("Already upvoted");
      } else {
        alert("Something went wrong, check console");
      }
    }
  };
  const downVotePost = async (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const { data, success, status } = await PostApi(
      `/api/comments/downvote/${postId}/${_id}`,
      {},
      true
    );
    if (success) {
      dispatch(setCommentList({ commentList: data.comments }));
    } else {
      if (status === 400) {
        alert("Already downvoted");
      } else {
        alert("Something went wrong, check console");
      }
    }
  };
  const navigateToProfilePage = () => {
    navigate(`/profile/${userId}`);
  };

  const deleteCommentFunction = async () => {
    const { data, success } = await PostApi(
      `/api/comments/delete/${postId}/${_id}`,
      {},
      true
    );
    if (success) {
      dispatch(setCommentList({ commentList: data.comments }));
    } else {
      alert("Something went wrong, check console");
    }
  };
  const editCommentFunction = () => {
    setEditComment(true);
    setNewComment(text);
  };
  const updateCommentFunction = async (e) => {
    e.preventDefault();
    const { data, success } = await PostApi(
      `/api/comments/edit/${postId}/${_id}`,
      {
        commentData: { text: newComment },
      },
      true
    );
    if (success) {
      setCommentList(data.comments);
      dispatch(setCommentList({ commentList: data.comments }));
    } else {
      alert("Some error occurred. Check console.");
    }
    setEditComment(false);
    setNewComment("");
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between border rounded-md p-2">
        <div className="flex flex-row items-center gap-2 w-full">
          <img
            src={avatar}
            alt="profile-pic"
            className="h-14 w-14 self-start  cursor-pointer object-cover aspect-square"
            onClick={navigateToProfilePage}
          />
          <div className="flex flex-col w-full">
            <div className="flex gap-1 items-center justify-between">
              <div className="flex items-baseline gap-1 ">
                <p className="font-semibold">{"@" + username}</p>
                <p className="text-gray-600">•</p>
                <p className="text-xs text-gray-600">
                  {getDateDifferance({ dateToCheck: updatedAt })}
                </p>
              </div>
              <div>
                {checkPostIdOfLoggedUser({ user, username }) && (
                  <div className="flex flex-row">
                    <button onClick={deleteCommentFunction}>
                      <TrashIcon className="p-2 h-10 w-10 hover:bg-hover-color rounded-full" />
                    </button>
                    <button onClick={editCommentFunction}>
                      <PencilAltIcon className="p-2 h-10 w-10 hover:bg-hover-color rounded-full" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {!editComment && <p className="">{text}</p>}
            {editComment && (
              <div className="relative  border-2 bg-gray-50 rounded ">
                <form onSubmit={updateCommentFunction}>
                  <input
                    type="text"
                    id="search-user-form"
                    className="h-10 w-full pl-2 pr-20 rounded z-0 focus:shadow focus:outline-none bg-gray-50"
                    placeholder="Post your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <div className="absolute top-1 right-1 flex flex-row gap-2 justify-center">
                    <button
                      type="submit"
                      className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => {
                        setEditComment(false);
                        setNewComment("");
                      }}
                      className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
            <div className="flex gap-10 pt-2">
              <div className="flex gap-1 items-center justify-center">
                {checkPostUpVotedByLoggedUser({ comment, user }) ? (
                  <button>
                    <ArrowCircleUpIcon className=" h-6 w-6 stroke-primary-color  hover:bg-hover-color rounded-full" />
                  </button>
                ) : (
                  <button onClick={upVotePost}>
                    <ArrowCircleUpIcon className=" h-6 w-6  hover:bg-hover-color rounded-full" />
                  </button>
                )}
                <p>•</p>
                <p className="text-xs text-gray-600">
                  {votes.upvotedBy.length} UpVotes
                </p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                {checkPostDownVotedByLoggedUser({ comment, user }) ? (
                  <button>
                    <ArrowCircleDownIcon className=" h-6 w-6 stroke-primary-color  hover:bg-hover-color rounded-full" />
                  </button>
                ) : (
                  <button onClick={downVotePost}>
                    <ArrowCircleDownIcon className=" h-6 w-6   hover:bg-hover-color rounded-full" />
                  </button>
                )}
                <p>•</p>
                <p className="text-xs text-gray-600">
                  {votes.downvotedBy.length} DownVotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CommentCard };
