import React from "react";
import {
	Icon_home,
	Icon_find,
	Icon_my_network,
	Icon_notification,
	Icon_profile,
} from "../../assets";
const Feed = () => {
	return (
		<div class="flex flex-row">
			<aside class="w-1/5 h-screen sticky top-0 pt-10 p-4 border-r h-[calc(100%_-4rem)] bg-bg-off-white">
				<ul className="flex flex-col gap-2">
					<li className="flex flex-row gap-4  p-2 hover:cursor-pointer bg-hover-color rounded-md">
						<img src={Icon_home} alt="home" />
						<p className="">Scroll</p>
					</li>
					<li className="flex flex-row gap-4 p-2 hover:cursor-pointer ">
						<img src={Icon_my_network} alt="home" />
						<p className="">My Network</p>
					</li>
					<li className="flex flex-row gap-4  p-2 hover:cursor-pointer">
						<img src={Icon_find} alt="home" />
						<p className="">Find</p>
					</li>
					<li className="flex flex-row gap-4  p-2 hover:cursor-pointer ">
						<img src={Icon_notification} alt="home" />
						<p className="">Notifications</p>
					</li>
					<li className="flex flex-row gap-4  p-2 hover:cursor-pointer ">
						<img src={Icon_profile} alt="home" />
						<p className="">Profile</p>
					</li>
				</ul>
			</aside>
			<main className="flex-grow  ">
				<p className="font-semibold border-b p-2">All posts</p>

				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>

				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
				<p>Content</p>
			</main>
			<aside class="w-1/4 h-screen sticky top-0 border-l">
				<p className="font-semibold border-b p-2">Recommeded People</p>
			</aside>
		</div>
	);
};

export { Feed };
