import { useState } from "react";
import { PostApi } from "../../apicalls/PostApi";

const EditProfileModal = ({ setEditProfileModal, userState }) => {
  const { firstName, lastName, _id, about, twitterProfile } = userState;
  const [editProfileState, setEditProfileState] = useState({
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    about: about === undefined ? "" : about,
    twitterProfile: twitterProfile === undefined ? "" : twitterProfile,
  });
  const inputChangeHandler = (e) => {
    const new_val = { [e.target.name]: e.target.value };
    setEditProfileState((prev) => ({ ...prev, ...new_val }));
  };

  const updateUserProfile = async () => {
    //     console.log(editProfileState); edit profile
    // this is not working dont know why
    //     const { data, success } = await PostApi(
    //       `api/users/edit`,
    //       { editProfileState },
    //       true
    //     );
  };
  return (
    <div
      class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto
                flex flex-row items-center justify-center 
              "
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-max pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Edit profile
            </h5>
          </div>
          <div class="modal-body relative p-4">
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
                value={editProfileState.firstName}
                onChange={inputChangeHandler}
              />
            </label>
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
                value={editProfileState.lastName}
                onChange={inputChangeHandler}
              />
            </label>
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="about"
            >
              About
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="about"
                name="about"
                type="text"
                value={editProfileState.about}
                onChange={inputChangeHandler}
              />
            </label>
            <label
              className="block text-gray-700 text-sm mb-2 border border-gray-400 rounded px-2 focus-within:border-black"
              htmlFor="twitter"
            >
              twitter
              <input
                className="appearance-none w-full my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="twitter"
                name="twitterProfile"
                type="text"
                value={editProfileState.twitterProfile}
                onChange={inputChangeHandler}
              />
            </label>
          </div>
          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
              onClick={() => setEditProfileModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              onClick={updateUserProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { EditProfileModal };
