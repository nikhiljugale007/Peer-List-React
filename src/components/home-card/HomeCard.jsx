import React from "react";

const HomeCard = ({ image_src, title, description }) => {
	return (
		<div className="flex flex-row border-2 gap-4 p-2 rounded-md">
			<img src={image_src} alt="share-icon" />
			<div>
				<p className="text-lg font-semibold">{title}</p>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default HomeCard;
