import { useState, useEffect } from "react";
import { PostCard, UserCard, SpinLoder, NewPostModal } from "../../components";
import "./Scroll.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, refreshFeed } from "../../redux/postSlice";
import { ChevronDownIcon, RefreshIcon } from "@heroicons/react/outline";
import { loadUsers } from "../../redux/userSlice";
import { getSortedFeed } from "../../utility/commonFunctions";

const Scroll = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [sortPostBy, setSortPostBy] = useState("LATEST");
  const [showSortPostDropDown, setSortPostDropdDown] = useState(false);
  const dispatch = useDispatch();
  const { feed, status, error } = useSelector((state) => state.postSlice);
  const { recommendedUsers, recommendedUsersStatus } = useSelector(
    (state) => state.userSlice
  );
  useEffect(() => {
    document.title = "Scroll | Discover and connect with professionals";
    if (status === "idle") {
      dispatch(loadPosts());
    }
    if (recommendedUsersStatus === "idle") {
      dispatch(loadUsers());
    }
  }, [dispatch, status, recommendedUsersStatus]);

  return (
    <div className="h-screen flex flex-row w-full">
      {showNewPostModal && (
        <NewPostModal setShowNewPostModal={setShowNewPostModal} />
      )}
      <div className="h-screen w-full border-l border-r overflow-y-scroll no-scrollbar sm:pb-16">
        <div className="sticky top-0 flex flex-row items-center justify-between p-2 border-b bg-primary-bg-color">
          <div className="flex gap-1">
            <button
              className="bg-gray-800 text-white px-6 h-10 w-40 rounded "
              onClick={() => {
                setSortPostDropdDown((prev) => !prev);
              }}
            >
              <div className="flex items-center justify-between">
                {sortPostBy}
                <ChevronDownIcon className="p-2 h-10 w-10 rounded-full" />
              </div>
            </button>
            {showSortPostDropDown && (
              <div className="z-10 absolute bg-white border-2 border-gray-800 border-r-4 border-b-4 rounded-md w-60 mt-1">
                <ul className="py-1">
                  <li
                    onClick={() => {
                      setSortPostDropdDown(false);
                      setSortPostBy("LATEST");
                    }}
                  >
                    <p className="block px-4 py-2 hover:bg-gray-100">Latest</p>
                  </li>
                  <li
                    onClick={() => {
                      setSortPostDropdDown(false);
                      setSortPostBy("TRENDING");
                    }}
                  >
                    <p className="block px-4 py-2 hover:bg-gray-100">
                      Trending
                    </p>
                  </li>
                </ul>
              </div>
            )}
            <button
              title="Refresh Feed"
              onClick={() => dispatch(refreshFeed())}
            >
              <RefreshIcon className="p-2 h-10 w-10 rounded-full" />
            </button>
          </div>
          <button
            className="p-1 hover:bg-hover-color rounded-md"
            onClick={() => setShowNewPostModal((prev) => !prev)}
          >
            <p className="font-semibold px-2">New Post</p>
          </button>
        </div>
        {status === "rejected" && alert("Error = " + error)}
        {status === "loading" ? (
          <div className="text-center p-10">
            <SpinLoder />
          </div>
        ) : (
          <div className="scroll-smooth">
            {getSortedFeed({ feed, sortPostBy }).map((post) => {
              return (
                <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />
              );
            })}
          </div>
        )}
      </div>
      <aside className="recommended-sidebar w-72 sticky top-0 overflow-y-scroll no-scrollbar">
        <p className="font-semibold border-b p-4">Recommeded People</p>
        <div className="flex flex-col gap-2">
          {recommendedUsersStatus === "idle" ||
          recommendedUsers === "pending" ? (
            <div className="text-center p-10">
              <SpinLoder />
            </div>
          ) : (
            <div>
              {recommendedUsers.slice(0, 4).map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export { Scroll };
