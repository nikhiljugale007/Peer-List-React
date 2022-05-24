import { PostCard } from "../../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Bookmark = () => {
  useEffect(() => {
    document.title = "Bookmarks | Discover and connect with professionals";
  });
  const { user } = useSelector((store) => store.authSlice);
  return (
    <div className="h-screen">
      {user.bookmarks.length === 0 ? (
        <div className="text-center p-10">
          You haven't bookmared any post yet
        </div>
      ) : (
        <div>
          <div className="text-center p-4 font-semibold ">Your bookmarks</div>
          {user.bookmarks.map((post) => {
            return (
              <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />
            );
          })}
        </div>
      )}
    </div>
  );
};
export { Bookmark };
