import { avatar } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { followUnFollowUserUserThunk, logoutUser } from "../../redux/authSlice";
import { BsTwitter, BsCompassFill } from "react-icons/bs";
import {
  EditProfileModal,
  ListModal,
  PostCard,
  SpinLoder,
} from "../../components";
import {
  checkUrlIsProvided,
  checkUserIsFollowed,
} from "../../utility/commonFunctions";

const Profile = () => {
  const { user } = useSelector((store) => store.authSlice);
  const [userState, setUserState] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEditProfileModal, setEditProfileModal] = useState(false);
  const [listModal, setListModal] = useState({
    showList: false,
    title: "",
    list: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id } = useParams();
  useEffect(() => {
    const getUserById = async () => {
      const { data, success } = await GetApi(`/api/users/${user_id}`, false);
      if (success) {
        setUserState(data.user);
        document.title =
          data.user.firstName +
          " " +
          data.user.lastName +
          " | Peerlist Profile";
      } else {
        alert("Some error occured, check console");
      }
    };

    const getPostsByUser = async () => {
      const { data, success } = await GetApi(
        `/api/posts/user/${userState.username}`,
        false
      );
      if (success) {
        // dispatch(updateUserPosts({ posts: data.posts }));
        setUserPosts(data.posts);
      } else {
        alert("Something went wrong, check console");
      }
    };
    setLoading(true);
    getUserById();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getPostsByUser();
  }, [user_id, userState.username, dispatch, reloadPage]);

  const logoutUserFun = () => {
    dispatch(logoutUser());
    navigate("/home");
  };
  const activeIconStyle = {
    // color: "#00acee",
    fontSize: "1.2em",
  };

  const followUser = async ({ userId }) => {
    dispatch(followUnFollowUserUserThunk({ userId: user_id, type: "follow" }));
  };
  const unfollowUser = async ({ userId }) => {
    dispatch(
      followUnFollowUserUserThunk({ userId: user_id, type: "unfollow" })
    );
  };

  return (
    <div className="min-h-screen w-full scroll-smooth">
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <main
          className={
            "flex-grow border-l border-r min-h-screen w-full overflow-scroll scroll-smooth pb-4 no-scrollbar"
          }
        >
          {/* modal */}
          {showEditProfileModal && (
            <div>
              <EditProfileModal
                setEditProfileModal={setEditProfileModal}
                userState={userState}
                setReloadPage={setReloadPage}
              />
            </div>
          )}
          {listModal.showList && (
            <div>
              <ListModal setListModal={setListModal} listModal={listModal} />
            </div>
          )}
          {/* main profile */}
          <div className="w-full p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color">
            <div className="flex sm:flex-row flex-col-reverse gap-10 items-center justify-between">
              <div className="flex flex-col gap-5 ">
                <div className="flex sm:flex-row flex-col-reverse items-center gap-5">
                  <p className="text-4xl font-semibold">
                    {userState.firstName + " " + userState.lastName}
                  </p>
                  {userState.username === user.username ? (
                    <button
                      className="border px-2 py-1 rounded-sm"
                      onClick={() => setEditProfileModal(true)}
                    >
                      <p className="text-sm ">Edit Profile</p>
                    </button>
                  ) : checkUserIsFollowed({
                      user,
                      username: userState.username,
                    }) ? (
                    <button
                      onClick={() => unfollowUser({ userId: user._id })}
                      className="border p-1 px-2 rounded-md hover:bg-hover-color"
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => followUser({ userId: user._id })}
                      className="border p-1 px-2 rounded-md hover:bg-hover-color"
                    >
                      Follow
                    </button>
                  )}
                </div>
                <p className="text-lg">
                  {userState.about === undefined || userState.about === ""
                    ? "Add about section."
                    : userState.about}
                </p>
              </div>
              {!profileImageLoaded ? (
                <img
                  src={avatar}
                  alt="profile-pic"
                  className="h-20 w-20 rounded-full"
                />
              ) : null}
              <img
                src={userState.userProfile}
                alt="profile-pic"
                className="h-20 w-20 rounded-full object-cover aspect-square"
                onLoad={() => setProfileImageLoaded(true)}
              />
            </div>

            <div
              className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap sm:justify-start justify-center
            "
            >
              <a
                href={userState.twitterProfile}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 tooltip hover:text-green-600"
              >
                <BsTwitter
                  style={
                    checkUrlIsProvided({ url: userState.twitterProfile }) &&
                    activeIconStyle
                  }
                  size={30}
                />
                <p>
                  Twitter
                  <span className="tooltiptext">
                    {checkUrlIsProvided({ url: userState.twitterProfile })
                      ? userState.twitterProfile
                      : "Not Provided"}
                  </span>
                </p>
              </a>
              <a
                href={userState.portfolioLink}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 tooltip hover:text-green-600"
              >
                <BsCompassFill
                  style={
                    checkUrlIsProvided({ url: userState.portfolioLink }) &&
                    activeIconStyle
                  }
                  size={30}
                />
                <p>
                  Portfolio
                  <span className="tooltiptext">
                    {checkUrlIsProvided({ url: userState.portfolioLink })
                      ? userState.portfolioLink
                      : "Not Provided"}
                  </span>
                </p>
              </a>
            </div>
            <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap sm:justify-start justify-center">
              <button
                className="text-lg"
                onClick={() =>
                  setListModal((prev) => ({
                    ...prev,
                    showList: true,
                    title: "Followers",
                    list: userState.followers,
                  }))
                }
              >
                {userState.followers.length + " "}Followers
              </button>
              <button
                className="text-lg"
                onClick={() =>
                  setListModal((prev) => ({
                    ...prev,
                    showList: true,
                    title: "Following",
                    list: userState.following,
                  }))
                }
              >
                {userState.following.length + " "}Following
              </button>
            </div>
            {user._id === userState._id && (
              <button
                className="bg-primary-color text-white px-2 py-1 rounded sm:self-start  self-center  hover:bg-primary-font-color w-max"
                onClick={logoutUserFun}
              >
                Logout
              </button>
            )}
          </div>
          <div className="p-4 font-semibold ">Your Posts</div>

          {userPosts.length === 0 ? (
            <p>You do not have any posts yet</p>
          ) : (
            [...userPosts].reverse().map((post) => {
              return (
                <PostCard
                  post={post}
                  key={post._id}
                  setReloadPage={setReloadPage}
                  cardType={user._id === userState._id ? "DELETE_CARD" : ""}
                />
              );
            })
          )}
        </main>
      )}
    </div>
  );
};

export { Profile };
