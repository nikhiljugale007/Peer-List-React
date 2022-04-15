import React from "react";
import { avatar } from "../../assets";

const UserCard = () => {
	return (
		<div className="flex flex-row gap-5 items-start p-2 bg-primary-bg-color">
			<img src={avatar} alt="profile-pic" className="h-14 w-14" />
			<div className="flex flex-col">
				<p className="">Akash Bhadange</p>
				<p className="text-xs text-gray-600">
					Web Dev and a Second year engineering student , loves tech and product
					and conversations :)
				</p>
			</div>
		</div>
	);
};

export default UserCard;
