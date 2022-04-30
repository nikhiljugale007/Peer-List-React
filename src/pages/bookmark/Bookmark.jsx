import { PostCard } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const Bookmark = () => {
  const { authState } = useAuthContext();
  return (
    <div>
      {authState.user.bookmarks.length === 0 && (
        <div className="text-center p-10">You are not following anyone</div>
      )}
      {authState.user.bookmarks.map((post) => {
        return <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />;
      })}
    </div>
  );
};
export { Bookmark };
