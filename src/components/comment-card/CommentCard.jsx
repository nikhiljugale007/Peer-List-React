import { avatar } from "../../assets";
import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
import { PostApi } from "../../apicalls/PostApi";
import { useAuthContext } from "../../context/AuthContext";
const CommentCard = ({ comment, postId, setCommentList }) => {
  const { text, username, votes, updatedAt, _id } = comment;
  const { authState } = useAuthContext();
  const upVotePost = async (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const { data, success, status } = await PostApi(
      `/api/comments/upvote/${postId}/${_id}`,
      {},
      true
    );
    if (success) {
      setCommentList(data.comments);
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
      setCommentList(data.comments);
    } else {
      if (status === 400) {
        alert("Already downvoted");
      } else {
        alert("Something went wrong, check console");
      }
    }
  };
  const navigateToProfilePage = () => {
    //to be done yet
  };
  const checkPostUpVotedByLoggedUser = () => {
    return comment.votes.upvotedBy.find(
      (comment) => comment.username === authState.user.username
    );
  };
  const checkPostDownVotedByLoggedUser = () => {
    return comment.votes.downvotedBy.find(
      (comment) => comment.username === authState.user.username
    );
  };
  const getWhenPostCreated = () => {
    var createdDate = new Date(updatedAt);
    var currentDate = new Date();
    const diff = Math.floor(currentDate - createdDate);
    const days = Math.floor(diff / 86400000);
    if (days > 0) {
      return days + " days ago";
    }
    const hours = Math.floor((diff % 86400000) / 3600000);
    if (hours > 0) {
      return hours + " hours ago";
    }
    const minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
    if (minutes > 0) {
      return minutes + " minutes ago";
    }
    return "Just now";
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between border rounded-md p-2">
        <div
          onClick={navigateToProfilePage}
          className="flex flex-row items-center gap-2"
        >
          <img
            src={avatar}
            alt="profile-pic"
            className="h-10 w-10 self-start"
          />
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="text-lg">{"@" + username}</p>
              <p className="text-gray-600">•</p>
              <p className="text-xs text-gray-600">{getWhenPostCreated()}</p>
            </div>
            <p>{text}</p>
            <div className="flex gap-10">
              <div className="flex gap-1 items-center justify-center">
                {checkPostUpVotedByLoggedUser() ? (
                  <button className="p-1">
                    <ArrowCircleUpIcon className=" h-6 w-6 stroke-primary-color  hover:bg-hover-color rounded-full" />
                  </button>
                ) : (
                  <button className="p-1" onClick={upVotePost}>
                    <ArrowCircleUpIcon className=" h-6 w-6  hover:bg-hover-color rounded-full" />
                  </button>
                )}
                <p>•</p>
                <p>{votes.upvotedBy.length} UpVotes</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                {checkPostDownVotedByLoggedUser() ? (
                  <button>
                    <ArrowCircleDownIcon className=" h-6 w-6 stroke-primary-color  hover:bg-hover-color rounded-full" />
                  </button>
                ) : (
                  <button onClick={downVotePost}>
                    <ArrowCircleDownIcon className=" h-6 w-6   hover:bg-hover-color rounded-full" />
                  </button>
                )}
                <p>•</p>
                <p>{votes.downvotedBy.length} DownVotes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CommentCard };
