import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainButton } from "./Button";
import { menus } from "../lib/menuList";

const NavMenu = () => {
	const [menu, setMenu] = useState(false);

	return (
		<nav className="flex flex-col lg:flex-row items-center justify-between w-11/12 mx-auto py-6">
			<div className="flex items-center justify-between w-full lg:w-auto">
				<div className="inline-flex items-center">
					<Image
						alt="Iris Designs Logo"
						src="/logo.png"
						height="45"
						width="45"
					/>
					<h1 className="hidden md:block ml-2 uppercase text-2xl font-extrabold text-gray-700 dark:text-gray-300">
						<span className="text-main">Iris</span>
						<br className="hidden lg:block xl:hidden" /> Designs
					</h1>
				</div>
				<div className="lg:hidden flex items-center">
					{/* open menu button */}
					{!menu ? (
						<button
							aria-label="Open Mobile Menu"
							onClick={() => setMenu(true)}
							className="mr-2 w-10 h-10 text-grad-1 focus:text-grad-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-full h-full"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					) : null}

					{/* close menu button */}
					{menu ? (
						<button
							aria-label="Close Mobile Button"
							onClick={() => setMenu(false)}
							className="mr-2 w-10 h-10 text-grad-1 focus:text-grad-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-full h-full"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					) : null}

					{/* hire button */}
					<MainButton />
				</div>
			</div>
			{/* for mobile > tablet navigations */}
			{menu ? (
				<div className="lg:hidden w-full">
					<ul className="mt-3 flex flex-col justify-center md:flex-row text-lg 2xl:text-xl text-gray-800 text-center">
						{menus.map((menu, index) => (
							<li key={index} className="py-2 md:py-0 md:px-4">
								<Link href={menu.href}>
									<a className="tracking-wide dark:text-gray-100 hover:text-main dark:hover:text-main">
										{menu.title}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<hr className="my-2" />
				</div>
			) : null}

			{/* for desktop navigations */}
			<ul className="hidden lg:flex items-center text-lg 2xl:text-xl text-gray-800">
				{menus.map((menu, index) => (
					<li key={index} className="px-6">
						<Link href={menu.href}>
							<a className="tracking-wide dark:text-gray-100 hover:text-main dark:hover:text-main">
								{menu.title}
							</a>
						</Link>
					</li>
				))}
				<li className="pl-8">
					<MainButton />
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
