import "./Feed.css";
import {
	Icon_home,
	Icon_find,
	Icon_my_network,
	Icon_notification,
	Icon_profile,
} from "../../assets";
import { Scroll } from "../scroll/Scroll";
import { Routes, Route, Link } from "react-router-dom";
import { Profile } from "../profile/Profile";
const Feed = () => {
	return (
		<div className="flex justify-center items-center bg-bg-off-white">
			<div class="flex lg:flex-row flex-col xl:w-4/5">
				<aside class="sidebar w-60 flex-shrink-0 h-screen sticky top-0 pt-14 p-4 border-r h-[calc(100%_-14rem)] ">
					<ul className="flex flex-col gap-2">
						<Link
							to="/scroll"
							className="flex flex-row gap-4  p-2 hover:cursor-pointer bg-hover-color rounded-md"
						>
							<img src={Icon_home} alt="home" />
							<p className="font-semibold">Scroll</p>
						</Link>
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
						<Link
							to="profile"
							className="flex flex-row gap-4  p-2 hover:cursor-pointer "
						>
							<img src={Icon_profile} alt="home" />
							<p className="">Profile</p>
						</Link>
					</ul>
				</aside>
				<div>
					<Routes>
						<Route path="/" element={<Scroll />} />
						<Route path="profile" element={<Profile />} />
					</Routes>
					{/* <Scroll /> */}
				</div>
				<div className="bottom-navigation bg-primary-bg-color fixed bottom-0 z-20 w-full h-16 border-t">
					<ul className="flex flex-row gap-2 justify-evenly items-center py-2 ">
						<li className="flex flex-col  p-2 hover:cursor-pointer border-t">
							<img src={Icon_home} alt="home" className="w-6 h-6 self-center" />
							<p className="text-xs text-gray-600">Scroll</p>
						</li>
						<li className="flex flex-col p-2 hover:cursor-pointer ">
							<img
								src={Icon_my_network}
								alt="home"
								className="w-6 h-6 self-center"
							/>
							<p className="text-xs text-gray-600">My Network</p>
						</li>

						<li className="flex flex-col  p-2 hover:cursor-pointer ">
							<img
								src={Icon_notification}
								alt="home"
								className="w-6 h-6 self-center"
							/>
							<p className="text-xs text-gray-600">Notifications</p>
						</li>
						<li className="flex flex-col  p-2 hover:cursor-pointer ">
							<img
								src={Icon_profile}
								alt="home"
								className="w-6 h-6 self-center"
							/>
							<p className="text-xs text-gray-600">Profile</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export { Feed };
