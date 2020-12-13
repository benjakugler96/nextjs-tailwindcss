import Link from 'next/link';

const BackButton = () => (
	<svg
		className="w-8 h-8 cursor-pointer"
		fill="none"
		stroke="#374151"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M15 19l-7-7 7-7"
		></path>
	</svg>
);

const PageHeader = ({
	title = 'Page Title',
	backButton = true,
	backUrl = '/',
}) => (
	<header className="bg-white shadow">
		<div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
			{backButton && (
				<Link href={backUrl}>
					<a>
						<BackButton />
					</a>
				</Link>
			)}
			<h1 className="ml-2 text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-800 flex items-center">
				{title}
			</h1>
		</div>
	</header>
);

export default PageHeader;
