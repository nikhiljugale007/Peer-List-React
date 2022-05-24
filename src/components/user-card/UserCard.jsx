import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { firstName, lastName, userProfile, about, _id } = user;
  return (
    <Link
      to={`/profile/${_id}`}
      className="flex flex-row gap-5 items-start p-2 bg-primary-bg-color "
    >
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
    </Link>
  );
};

export default UserCard;
