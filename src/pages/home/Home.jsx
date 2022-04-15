import "./Home.css";
import smiley from "../../assets/smiley.svg";
const Home = () => {
	return (
		<div className="">
			<div className="h-screen flex flex-col items-center justify-center md:px-20 bg-bg-black ">
				<p className="lg:text-8xl sm:text-7xl leading-tight font-extrabold text-primary-bg-color text-center text-5xl">
					The <span className="text-primary-color"> Professional </span>{" "}
					<span className="line-through">Network </span>
					<span className="text-primary-color"> Community</span> you were
					waiting for.
				</p>
				<p className="text-2xl text-primary-bg-color text-center py-4">
					Peerlist is a community of working professionals focused on building a
					personal brand, sharing professional content, and finding peers to
					collaborate with.
				</p>
				<div className="py-4 ">
					<button className="px-5 py-3 bg-primary-color rounded-md flex flex-row items-center gap-3 hover:opacity-75">
						<p className="text-primary-bg-color text-lg font-bold ">
							Join Peerlist
						</p>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 fill-white"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
									clipRule="evenodd"
									className="bg-primary-bg-color"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
			<div className="min-h-screen bg-bg-off-white flex flex-col items-center justify-center gap-5  ">
				<p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl leading-tight font-extrabold text-secondary-bg-color text-center lg:w-1/2 md:w-3/4 w-4/5">
					Getting your Peerlist profile is fast
				</p>
				<p className="text-2xl py-4 sm:w-3/5 w-4/5 text-center">
					Onboarding takes lesser time than cooking your ramen or maggi. No
					kidding!
				</p>
				<img src={smiley} alt="smiley" />

				<div className="flex sm:flex-row flex-col sm:gap-10 gap-4 items-center justify-center ">
					<div className="flex flex-col gap-2 sm:w-1/4 w-4/5 sm:self-start">
						<p className="rounded-full bg-tertiory-bg-color w-10 h-10 flex items-center justify-center">
							1
						</p>
						<div className="flex flex-row gap-2 items-center">
							<p className="text-lg font-semibold">Signup</p>{" "}
							<p className="text-sm text-gray-600">~1 min</p>
						</div>
						<p>
							Create your account Google, Twitter or Email. And fill in your
							basic info. You can import from LinkedIn too.
						</p>
					</div>
					<div className="flex flex-col gap-2 sm:w-1/4 w-4/5 sm:self-start ">
						<p className="rounded-full bg-tertiory-bg-color w-10 h-10 flex items-center justify-center">
							2
						</p>
						<div className="flex flex-row gap-2 items-center">
							<p className="text-lg font-semibold">Setup Profile</p>{" "}
							<p className="text-sm text-gray-600">~4 min</p>
						</div>
						<p>
							One-click integrations with 7+ platforms like Github, Dribbble.
							And import your resume from LinkedIn..
						</p>
					</div>
					<div className="flex flex-col gap-2 sm:w-1/4 w-4/5 sm:self-start">
						<p className="rounded-full bg-tertiory-bg-color w-10 h-10 flex items-center justify-center">
							3
						</p>
						<div className="flex flex-row gap-2 items-center">
							<p className="text-lg font-semibold">Publish Profile</p>{" "}
							<p className="text-sm text-gray-600">~20 sec</p>
						</div>
						<p>Once complete, choose your username and publish your profile!</p>
					</div>
				</div>
				<button className="px-5 py-4 my-5 bg-complimentary-font-color rounded-md flex flex-row items-center gap-3 hover:opacity-75">
					<p className="text-primary-bg-color text-lg font-bold ">
						Get your Peerlist Profile
					</p>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 fill-white"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
								clipRule="evenodd"
								className="bg-primary-bg-color"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};

export { Home };
