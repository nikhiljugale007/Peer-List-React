import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CommentCard, PostCard, SpinLoder } from "../../components";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { PostApi } from "../../apicalls/PostApi";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsForPost,
  getPostDetails,
  setCommentList,
} from "../../redux/commentSlice";
import { getSortCommentsArray } from "../../utility/commonFunctions";
const PostPage = () => {
  const [newComment, setNewComment] = useState("");
  const [sortCommentsBy, setSortCommentsBy] = useState("LATEST");
  const { post_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentPost, postStatus, commentList } = useSelector(
    (state) => state.commentSlice
  );
  useEffect(() => {
    document.title = "Scroll | Post";
    dispatch(getPostDetails({ post_id }));
    dispatch(getCommentsForPost({ post_id }));
  }, [post_id, dispatch]);

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
      // setCommentList(data.comments);
      dispatch(setCommentList({ commentList: data.comments }));
      setNewComment("");
    } else {
      alert("Some error occurred. Check console.");
    }
  };

  return (
    <div className="h-screen w-full ">
      {postStatus === "pending" || postStatus === "idle" ? (
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

          <PostCard post={currentPost} />

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
              getSortCommentsArray({ commentList, sortCommentsBy }).map(
                (comment) => {
                  return (
                    <CommentCard
                      key={comment._id}
                      comment={comment}
                      postId={post_id}
                    />
                  );
                }
              )}
          </div>
        </main>
      )}
    </div>
  );
};

export { PostPage };
