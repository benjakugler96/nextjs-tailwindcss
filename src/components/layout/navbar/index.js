import { useState } from 'react';
import MobileMenu from '../mobile-menu';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						{/* <div className="flex-shrink-0">
							<svg
								class="h-6 w-6 text-gray-50"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</div> */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
								<a
									href="#"
									className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Home
								</a>

								<a
									href="#"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Country List
								</a>
							</div>
						</div>
					</div>

					<div className="-mr-2 flex md:hidden">
						{/* <!-- Mobile menu button --> */}
						<button
							onClick={toggleMenu}
							className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span className="sr-only">Open main menu</span>
							{/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
							<svg
								className={isMenuOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
							<svg
								className={isMenuOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<MobileMenu isVisible={isMenuOpen} />
		</nav>
	);
};

export default NavBar;
