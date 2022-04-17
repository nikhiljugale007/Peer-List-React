import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateForm } from "./FormValidator";
import { PostApi } from "../../apicalls/PostApi";

const initialSignUpFormState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirm_password: "",
  accept_terms: false,
};
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [signUpFormState, setSignUpFormState] = useState(
    initialSignUpFormState
  );
  const [formError, setFormError] = useState(initialSignUpFormState);
  const navigate = useNavigate();
  const signUpUserFun = async () => {
    const response = await PostApi(
      "/api/auth/signup",
      { ...signUpFormState },
      false
    );
    const { success } = response;
    if (success) {
      navigate("/login");
    } else {
      alert("Some error occured. Check console");
    }
  };

  const inputChangeHandler = (e) => {
    const new_val = { [e.target.name]: e.target.value };
    setSignUpFormState((prev) => ({ ...prev, ...new_val }));
  };
  const checkboxChangeHandler = (e) => {
    setSignUpFormState((prev) => ({
      ...prev,
      accept_terms: !prev.accept_terms,
    }));
  };
  const signupUser = (e) => {
    e.preventDefault();

    const errors = validateForm(signUpFormState);

    if (Object.keys(errors).length === 0) {
      setFormError(initialSignUpFormState);
      signUpUserFun();
    } else {
      setFormError(errors);
    }
  };
  return (
    <div className="box-border w-full p-1">
      <div className="w-full md:max-w-md mx-auto border-2 md:border-r-4 border-black rounded-md flex flex-col gap-5 py-10">
        <p className="text-3xl font-semibold w-max mx-auto ">Join Peerlist</p>
        <form className="bg-white  rounded px-8  mb-4" onSubmit={signupUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="firstName"
            >
              firstName
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                value={signUpFormState.firstName}
                onChange={inputChangeHandler}
              />
            </label>
            <p className="text-xs text-red-500">{formError.firstName}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="lastName"
            >
              lastName
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                type="text"
                value={signUpFormState.lastName}
                onChange={inputChangeHandler}
              />
            </label>
            <p className="text-xs text-red-500">{formError.lastName}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="username"
            >
              username
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                value={signUpFormState.username}
                onChange={inputChangeHandler}
              />
            </label>
            <p className="text-xs text-red-500">{formError.username}</p>
          </div>
          <div className="mb-4">
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
                  value={signUpFormState.password}
                  onChange={inputChangeHandler}
                />
                <button
                  className="flex absolute inset-y-0 right-0 bg-hover-color h-6 px-1 rounded-md"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>
            <p className="text-xs text-red-500">{formError.password}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="password"
            >
              Confirm Password
              <div className="relative">
                <input
                  className="appearance-none w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm_password"
                  name="confirm_password"
                  type={showPasswordConfirm ? "text" : "password"}
                  value={signUpFormState.confirm_password}
                  onChange={inputChangeHandler}
                />
                <button
                  className="flex absolute inset-y-0 right-0 bg-hover-color h-6 px-1 rounded-md"
                  onClick={() => setShowPasswordConfirm((prev) => !prev)}
                >
                  {showPasswordConfirm ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>
            <p className="text-xs text-red-500">{formError.confirm_password}</p>
          </div>
          <div>
            <label className="text-gray-700">
              <input
                type={"checkbox"}
                className="mr-2"
                onChange={checkboxChangeHandler}
                checked={signUpFormState.accept_terms}
              />
              I accept terms terms and condition.
            </label>
            <p className="text-xs text-red-500">{formError.accept_terms}</p>
          </div>
          <div className="w-full flex items-center pt-4">
            <button
              className="bg-primary-color text-white px-2 py-1 rounded  hover:bg-primary-font-color "
              type="submit"
            >
              SignUp
            </button>
          </div>
        </form>
        <p className="text-lg w-max mx-auto ">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-font-color">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export { SignUp };
