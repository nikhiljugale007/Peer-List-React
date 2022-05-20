import { useState, useEffect } from "react";
import { PostCard, UserCard, SpinLoder, NewPostModal } from "../../components";
import "./Scroll.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/postSlice";
const Scroll = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const dispatch = useDispatch();
  const { feed, status, error } = useSelector((store) => store.postSlice);
  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  }, [dispatch, status]);

  return (
    <div className="h-screen flex flex-row w-full">
      {showNewPostModal && (
        <NewPostModal setShowNewPostModal={setShowNewPostModal} />
      )}
      <div className="h-screen w-full border-l border-r overflow-y-scroll no-scrollbar sm:pb-16">
        <div className="sticky top-0 flex flex-row items-center justify-between p-2 border-b bg-primary-bg-color">
          <p className="font-semibold">All feed</p>
          <button
            className="p-1 hover:bg-hover-color rounded-md"
            onClick={() => setShowNewPostModal((prev) => !prev)}
          >
            <p className="font-semibold">New Post</p>
          </button>
        </div>
        {status === "rejected" && alert("Error = " + error)}
        {status === "loading" ? (
          <div className="text-center p-10">
            <SpinLoder />
          </div>
        ) : (
          <div className="scroll-smooth">
            {feed.map((post) => {
              return (
                <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />
              );
            })}
          </div>
        )}
      </div>
      <aside className="recommended-sidebar w-72 sticky top-0 overflow-y-scroll no-scrollbar">
        <p className="font-semibold border-b p-3">Recommeded People</p>
        <div className="flex flex-col gap-2">
          <UserCard />
          <UserCard />
        </div>
      </aside>
    </div>
  );
};

export { Scroll };
