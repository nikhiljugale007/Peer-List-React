import { PostCard } from "../../components";
import { useAuthContext } from "../../context/AuthContext";

const Bookmark = () => {
  const { authState } = useAuthContext();
  return (
    <div>
      {authState.user.bookmarks.length === 0 && (
        <div className="text-center p-10">
          You haven't bookmared any post yet
        </div>
      )}
      {authState.user.bookmarks.map((post) => {
        return <PostCard post={post} key={post._id} cardType={"FOLLOW_CARD"} />;
      })}
    </div>
  );
};
export { Bookmark };
