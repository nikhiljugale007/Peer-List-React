import React from "react";
import { PostCard, UserCard } from "../../components";

const Scroll = () => {
	return (
		<div className="flex flex-row">
			<main className="flex-grow mb-8 md:mx-16 lg:mx-0 border-l border-r">
				<p className="font-semibold border-b p-4  sticky top-0 bg-primary-bg-color">
					All posts
				</p>
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</main>
			<aside class="sidebar w-72 flex-shrink-0 h-screen sticky top-0 border-l  bg-primary-bg-color">
				<p className="font-semibold border-b p-4">Recommeded People</p>
				<div className="flex flex-col gap-2 px-2">
					<UserCard />
					<UserCard />
					<UserCard />
					<UserCard />
				</div>
			</aside>
		</div>
	);
};

export { Scroll };
