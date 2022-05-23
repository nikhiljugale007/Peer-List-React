import { avatar, Icon_medium, Icon_portfolio2 } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { logoutUser } from "../../redux/authSlice";
import { BsTwitter } from "react-icons/bs";
import {
  EditProfileModal,
  ListModal,
  PostCard,
  SpinLoder,
} from "../../components";

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
    color: "#00acee",
    fontSize: "1.2em",
  };
  const checkTwitterUrl = () => {
    if (
      userState.twitterProfile === undefined ||
      useState.twitterProfile === ""
    ) {
      return false;
    } else {
      return true;
    }
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
              <div className="flex flex-col gap-5">
                <div className="flex sm:flex-row flex-col-reverse items-center gap-5">
                  <p className="text-4xl font-semibold">
                    {userState.firstName + " " + userState.lastName}
                  </p>
                  {userState.username === user.username && (
                    <button
                      className="border px-2 py-1 rounded-sm"
                      onClick={() => setEditProfileModal(true)}
                    >
                      <p className="text-sm ">Edit Profile</p>
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

            <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap">
              <a
                href={userState.twitterProfile}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 items-center tooltip"
              >
                {/* <img src={Icon_twitter} alt="twitter" /> */}
                <BsTwitter
                  style={checkTwitterUrl() && activeIconStyle}
                  size={30}
                />
                <p>
                  Twitter
                  <span class="tooltiptext">
                    {checkTwitterUrl()
                      ? userState.twitterProfile
                      : "Not Provided"}
                  </span>
                </p>
              </a>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 tooltip"
              >
                <img src={Icon_portfolio2} alt="twitter" />
                <p>
                  Portfolio
                  <span className="tooltiptext">Not Provided</span>
                </p>
              </a>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 tooltip"
              >
                <img src={Icon_medium} alt="twitter" />
                <p>
                  Medium <span className="tooltiptext">Not Provided</span>
                </p>
              </a>
            </div>
            <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap">
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
                className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                onClick={logoutUserFun}
              >
                Logout
              </button>
            )}
          </div>
          {userPosts.length === 0 ? (
            <p>You do not have any posts yet</p>
          ) : (
            [...userPosts].reverse().map((post) => {
              return (
                <PostCard
                  post={post}
                  key={post._id}
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
