import {avatar,Icon_twitter,Icon_medium,Icon_portfolio2} from "../../assets";

const Profile = () => {
	return  <main className="flex-grow  mb-8 md:mx-16 lg:mx-0 border-l border-r h-screen w-full">
				<div className="w-full p-10 flex flex-col gap-5 border-t border-b bg-primary-bg-color">
					<div className="flex flex-row gap-10 items-center justify-between">
						<div className="flex flex-col gap-5">
							<div className="flex flex-row items-center gap-5">
								<p className="text-4xl font-semibold">Nikhil Jugale</p>
								<button className="border px-2 py-1 rounded-sm">
									<p className="text-sm ">Edit Profile</p>
								</button>
							</div>	
							
							<p className="text-lg">
							Learning web development @neog.camp 2022

							</p>
						</div>
						<img src={avatar} alt="profile-pic" className="h-20 w-20" />
					</div>
				
				<div className="flex flex-row gap-20">
					<a href="https://twitter.com/" target="_blank" rel="noreferrer" className="flex flex-row gap-2 p-1 rounded-md hover:text-primary-font-color" >
						<img src={Icon_twitter} alt="twitter"/>
						<p>Twitter</p>
					</a>
					<a href="https://google.com/" target="_blank" rel="noreferrer" className="flex flex-row gap-2">
						<img src={Icon_portfolio2} alt="twitter"/>
						<p>Portfolio</p>
					</a>
					<a href="https://google.com/" target="_blank" rel="noreferrer" className="flex flex-row gap-2">
						<img src={Icon_medium} alt="twitter"/>
						<p>Medium</p>
					</a>
					
					
				</div>
			</div>
		</main>
	;
};

export { Profile };
