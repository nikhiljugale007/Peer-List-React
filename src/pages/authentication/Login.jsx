import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PostApi } from "../../apicalls/PostApi";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../redux/authSlice";
import { useEffect } from "react";
const inititalLoginState = { username: "", password: "" };

const validateForm = (formState) => {
  const { username, password } = formState;
  const errors = {};

  if (!username) {
    errors.username = "username is required!";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }
  return errors;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFormState, setLoginFormState] = useState(inititalLoginState);
  const [formError, setFormError] = useState(inititalLoginState);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Peerlist | Your most meaningful professional network";
  });

  const loginUserApiCall = async () => {
    const response = await PostApi(
      "/api/auth/login",
      { ...loginFormState },
      false
    );
    const { data, success } = response;
    if (success) {
      dispatch(setLoggedUser({ ...data }));
      location.state === null
        ? navigate("/scroll")
        : navigate(location?.state?.from);
    } else {
      alert("Something went wrong, check console");
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    const errors = validateForm(loginFormState);
    if (Object.keys(errors).length === 0) {
      setFormError(inititalLoginState);
      loginUserApiCall();
    } else {
      setFormError(errors);
    }
  };
  const inputChangeHandler = (e) => {
    const new_val = { [e.target.name]: e.target.value };
    setLoginFormState((prev) => ({ ...prev, ...new_val }));
  };
  const fillDemoCredentials = () => {
    setLoginFormState((prev) => ({
      ...prev,
      username: "adarshbalika",
      password: "adarshBalika123",
    }));
  };
  return (
    <div className="box-border w-full p-1">
      <div className="w-full md:max-w-md mx-auto border-2 md:border-r-4 border-black rounded-md flex flex-col gap-5 py-10">
        <p className="text-3xl font-semibold w-max mx-auto ">
          Log in to Peerlist
        </p>
        <form className="bg-white  rounded px-8  mb-4" onSubmit={loginUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="username"
            >
              Username
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="johnravdoekar007"
                value={loginFormState.username}
                onChange={inputChangeHandler}
              />
            </label>
            <p className="text-xs text-red-500">{formError.username}</p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="password"
            >
              Password
              <div className="relative">
                <input
                  className="appearance-none w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={loginFormState.password}
                  onChange={inputChangeHandler}
                />
                <button
                  className="flex absolute inset-y-0 right-0 bg-hover-color h-6 px-1 rounded-md"
                  onClick={(e) => {
                    setShowPassword((prev) => !prev);
                    e.preventDefault();
                  }}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>{" "}
            <p className="text-xs text-red-500">{formError.password}</p>
          </div>
          <div className="flex items-center justify-between">
            <a
              className="inline-block align-baseline text-sm text-primary-font-color hover:font-semibold"
              href="https://google.com"
            >
              Forgot Password?
            </a>
            <button
              className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-lg w-max mx-auto ">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary-font-color">
            Join Peerlist
          </Link>
        </p>
        <button
          className="bg-primary-bg-color text-primary-color border border-gray-400 px-2 py-1 rounded w-max mx-auto hover:bg-hover-color"
          onClick={fillDemoCredentials}
        >
          Log In As Guest
        </button>
      </div>
    </div>
  );
};
export { Login };
