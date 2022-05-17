import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { CommentCard, PostCard, SpinLoder } from "../../components";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { PostApi } from "../../apicalls/PostApi";
const PostPage = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [sortCommentsBy, setSortCommentsBy] = useState("LATEST");
  const { post_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getPostById = async () => {
      const { data, success } = await GetApi(`/api/posts/${post_id}`, false);
      if (success) {
        setPost(data.post);
      } else {
        alert("Some error occured, check console");
      }
      setLoading(false);

      const res = await GetApi(`/api/comments/${post_id}`, false);
      setCommentList(res.data.comments);
    };
    getPostById();
  }, [post_id]);

  const addCommentToPost = async (e) => {
    e.preventDefault();
    const { data, success } = await PostApi(
      `/api/comments/add/${post_id}`,
      {
        commentData: { text: newComment },
      },
      true
    );
    if (success) {
      setCommentList(data.comments);
      setNewComment("");
    } else {
      alert("Some error occurred. Check console.");
    }
  };

  const sortedCommentsArray = () => {
    if (sortCommentsBy === "UPVOTES") {
      return commentList.sort((commentA, commentB) => {
        const upVoteDiff =
          commentB.votes.upvotedBy.length - commentA.votes.upvotedBy.length;
        if (upVoteDiff === 0) {
          return (
            commentA.votes.downvotedBy.length -
            commentB.votes.downvotedBy.length
          );
        }
        return upVoteDiff;
      });
    } else if (sortCommentsBy === "DOWNVOTES") {
      return commentList.sort((commentA, commentB) => {
        const downVoteDiff =
          commentB.votes.downvotedBy.length - commentA.votes.downvotedBy.length;
        if (downVoteDiff === 0) {
          return (
            commentA.votes.upvotedBy.length - commentB.votes.upvotedBy.length
          );
        }
        return downVoteDiff;
      });
    } else if (sortCommentsBy === "LATEST") {
      return commentList.sort(
        (commentA, commentB) =>
          new Date(commentB.updatedAt) - new Date(commentA.updatedAt)
      );
    }
    return commentList;
  };
  return (
    <div className="h-screen w-full ">
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <main
          className={
            "flex-grow h-screen w-full overflow-scroll pb-4 no-scrollbar p-4"
          }
        >
          <button className="mb-2" onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="p-2 h-8 w-8 hover:bg-hover-color border rounded-full" />
          </button>

          <PostCard post={post} />

          <div className="relative  border-2 bg-gray-50 rounded m-2">
            <form onSubmit={addCommentToPost}>
              <input
                type="text"
                id="search-user-form"
                className="h-12 w-full pl-10 pr-20 rounded z-0 focus:shadow focus:outline-none bg-gray-50"
                placeholder="Post your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="absolute top-2 right-2 h-8 flex flex-col justify-center">
                <button
                  type="submit"
                  className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                >
                  POST{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-2 p-2 pt-2">
            <div className="flex gap-2 items-center">
              <p>Sort By : </p>
              <button
                className={
                  "border p-1 px-2 rounded-md " +
                  (sortCommentsBy === "LATEST"
                    ? "hover:bg-bg-black text-primary-bg-color bg-secondary-bg-color"
                    : "")
                }
                onClick={() => setSortCommentsBy("LATEST")}
              >
                LATEST
              </button>
              <button
                className={
                  "border p-1 px-2 rounded-md " +
                  (sortCommentsBy === "UPVOTES"
                    ? "hover:bg-bg-black text-primary-bg-color bg-secondary-bg-color"
                    : "")
                }
                onClick={() => setSortCommentsBy("UPVOTES")}
              >
                UpVotes
              </button>
              <button
                className={
                  "border p-1 px-2 rounded-md " +
                  (sortCommentsBy === "DOWNVOTES"
                    ? "hover:bg-bg-black text-primary-bg-color bg-secondary-bg-color"
                    : "")
                }
                onClick={() => setSortCommentsBy("DOWNVOTES")}
              >
                DownVotes
              </button>
            </div>
            {commentList !== undefined &&
              sortedCommentsArray().map((comment) => {
                return (
                  <CommentCard
                    key={comment._id}
                    comment={comment}
                    postId={post_id}
                    setCommentList={setCommentList}
                  />
                );
              })}
          </div>
        </main>
      )}
    </div>
  );
};

export { PostPage };
