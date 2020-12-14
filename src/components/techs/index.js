const Techs = () => (
	<div className="p-6 md:p-12 bg-white rounded">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="lg:text-center">
				<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
					Tools List
				</h2>
				<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					This app was created using the following
				</p>
			</div>
			<div className="mt-10">
				<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-md bg-blue-500 text-white">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								Next.js
							</dt>
							<dd className="mt-2 text-sm md:text-base text-gray-500">
								Next.js gives you the best developer experience with all the
								features you need for production: hybrid static & server
								rendering, TypeScript support, smart bundling, route
								pre-fetching, and more. No config needed.
							</dd>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-md bg-blue-500 text-white">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								Tailwindcss
							</dt>
							<dd className="mt-2 text-sm md:text-base text-gray-500">
								A utility-first CSS framework packed with classes like flex,
								pt-4, text-center and rotate-90 that can be composed to build
								any design, directly in your markup.
							</dd>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-md bg-blue-500 text-white">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								Vercel
							</dt>
							<dd className="mt-2 text-sm md:text-base text-gray-500">
								Vercel is a cloud platform for static sites and Serverless
								Functions that fits perfectly with your workflow. It enables
								developers to host Jamstack websites and web services that
								deploy instantly, scale automatically, and requires no
								supervision, all with no configuration.
							</dd>
						</div>
					</div>
				</dl>
			</div>
		</div>
	</div>
);

export default Techs;
