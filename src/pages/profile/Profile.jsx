import axios from "axios";
import {
  avatar,
  Icon_twitter,
  Icon_medium,
  Icon_portfolio2,
} from "../../assets";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetApi } from "../../apicalls/GetApi";
import { PostCard, SpinLoder } from "../../components";

const Profile = () => {
  const { authState, authDispatch } = useAuthContext();
  const [userState, setUserState] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
    // const getPostsByUser = () => {
    //   axios
    //     .get(`/api/posts/user/${userState.username}`)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // };
    const getPostsByUser = async () => {
      const { data, success } = await GetApi(
        `/api/posts/user/${userState.username}`,
        false
      );
      if (success) {
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
  }, [user_id, userState.username]);

  const logoutUser = () => {
    authDispatch({ type: "LOGOUT_USER" });
    navigate("/home");
  };

  return (
    <div className="h-screen  w-full">
      {loading ? (
        <div className="text-center p-10">
          <SpinLoder />
        </div>
      ) : (
        <main className="flex-grow border-l border-r h-screen w-full">
          <div className="w-full p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color">
            <div className="flex sm:flex-row flex-col-reverse gap-10 items-center justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex sm:flex-row flex-col-reverse items-center gap-5">
                  <p className="text-4xl font-semibold">
                    {userState.firstName + " " + userState.lastName}
                  </p>
                  <button className="border px-2 py-1 rounded-sm">
                    <p className="text-sm ">Edit Profile</p>
                  </button>
                </div>
                <p className="text-lg">
                  Learning web development @neog.camp 2022
                </p>
              </div>
              <img src={avatar} alt="profile-pic" className="h-20 w-20 " />
            </div>

            <div className="flex sm:flex-row  sm:gap-20 gap-5 flex-wrap">
              <a
                href="https://twitter.com/"
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
              <p className="text-lg">
                {userState.followers.length + " "}Followers
              </p>
              <p className="text-lg">
                {userState.following.length + " "}Followers
              </p>
            </div>
            {authState.user._id === userState._id && (
              <button
                className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color w-max"
                onClick={logoutUser}
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
                  deleteCard={authState.user._id === userState._id}
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
