import "./Feed.css";
import {
	Icon_home,
	Icon_find,
	Icon_my_network,
	Icon_notification,
	Icon_profile,
} from "../../assets";
import { PostCard } from "./../../components";
const Feed = () => {
	return (
		<div className="flex justify-center items-center bg-bg-off-white">
			<div class="flex lg:flex-row flex-col xl:w-4/5">
				<aside class="sidebar w-60 flex-shrink-0 h-screen sticky top-0 pt-14 p-4 border-r h-[calc(100%_-14rem)] ">
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
				<main className="flex-grow mb-8">
					<p className="font-semibold border-b p-4  sticky top-0 bg-primary-bg-color">
						All posts
					</p>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</main>
				<aside class="sidebar w-60 flex-shrink-0 h-screen sticky top-0 border-l  ">
					<p className="font-semibold border-b p-4">Recommeded People</p>
				</aside>
				<div className="bottom-navigation bg-primary-color fixed bottom-0 z-20 w-full h-10">
					bottom navigation
				</div>
			</div>
		</div>
	);
};

export { Feed };
