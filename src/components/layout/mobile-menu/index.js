const MobileMenu = ({ isVisible = false }) => (
	<div className={isVisible ? 'block md:block' : 'hidden md:hidden'}>
		<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
			<a
				href="#"
				class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
			>
				Dashboard
			</a>

			<a
				href="#"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
			>
				About
			</a>
		</div>
	</div>
);

export default MobileMenu;
