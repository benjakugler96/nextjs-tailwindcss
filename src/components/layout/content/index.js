const Content = ({ children }) => (
	<main className="h-full bg-gray-100">
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div class="px-4 py-6 sm:px-0">
				<div class="rounded-lg">{children}</div>
			</div>
		</div>
	</main>
);
export default Content;
