import {
  avatar,
  Icon_twitter,
  Icon_medium,
  Icon_portfolio2,
} from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { updateUserPosts, logoutUser } from "../../redux/authSlice";
import {
  EditProfileModal,
  ListModal,
  PostCard,
  SpinLoder,
} from "../../components";

const Profile = () => {
  const { user, userPosts } = useSelector((store) => store.authSlice);
  const [userState, setUserState] = useState({});
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
        dispatch(updateUserPosts({ posts: data.posts }));
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
  }, [user_id, userState.username, dispatch]);

  const logoutUserFun = () => {
    dispatch(logoutUser());
    navigate("/home");
  };
  return (
    <div className="h-screen w-full">
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <main
          className={
            "flex-grow border-l border-r h-screen w-full overflow-scroll pb-4 no-scrollbar"
          }
        >
          {/* modal */}
          {showEditProfileModal && (
            <div>
              <EditProfileModal
                setEditProfileModal={setEditProfileModal}
                userState={userState}
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
                  {userState.about === undefined
                    ? "Add about section."
                    : userState.about}
                </p>
              </div>
              <img src={avatar} alt="profile-pic" className="h-20 w-20 " />
            </div>

            <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap">
              <a
                href={userState.twitterProfile}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1 "
              >
                <img src={Icon_twitter} alt="twitter" />
                <p>Twitter</p>
              </a>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1"
              >
                <img src={Icon_portfolio2} alt="twitter" />
                <p>Portfolio</p>
              </a>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 p-1"
              >
                <img src={Icon_medium} alt="twitter" />
                <p>Medium</p>
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
            userPosts.map((post) => {
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
