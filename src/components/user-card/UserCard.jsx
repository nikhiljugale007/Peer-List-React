import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, userProfile, about } = user;
  return (
    <div className="flex flex-row gap-5 items-start p-2 bg-primary-bg-color ">
      <img
        src={userProfile}
        alt="profile-pic"
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col">
        <p className="">{firstName + " " + lastName}</p>
        <p className="text-xs text-gray-600">
          {about === "" || about === undefined ? "No about section" : about}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
