import { PostCard } from "../../components";
import { useSelector } from "react-redux";
const Bookmark = () => {
  const { user } = useSelector((store) => store.authSlice);
  return (
    <div>
      {user.bookmarks.length === 0 && (
        <div className="text-center p-10">
          You haven't bookmared any post yet
        </div>
      )}
      {user.bookmarks.map((post) => {
        return <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />;
      })}
    </div>
  );
};
export { Bookmark };
