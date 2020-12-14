const Content = ({ children }) => (
	<main className="bg-gray-200 flex-1 items-center justify-center flex">
		<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div className="px-4 py-6 sm:px-0">
				<div className="rounded-lg">{children}</div>
			</div>
		</div>
	</main>
);
export default Content;
