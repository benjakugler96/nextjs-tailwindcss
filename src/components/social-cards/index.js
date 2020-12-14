import Image from 'next/image';

const GithubCard = () => (
	<div className="flex flex-col md:flex-row">
		<a
			className="bg-gray-900 p-6 mb-6 rounded md:p-8 flex items-center flex-1 md:mr-5 cursor-pointer shadow-md"
			href="https://github.com/benjakugler96/nextjs-tailwindcss"
			target="_blank"
		>
			<Image
				alt="github"
				height="64"
				src="/GitHub-Mark-Light-64px.png"
				width="64"
			/>
			<div className="ml-5">
				<div className="text-white">Visit Github repository</div>
				<div className="text-xs text-gray-200">Click me</div>
			</div>
		</a>
		<a
			className="bg-white p-6 mb-6 rounded md:p-8 flex items-center flex-1 md:ml-5 cursor-pointer shadow-md"
			href="https://www.linkedin.com/in/benjamin-kugler-810872173/"
			target="_blank"
		>
			<Image src="/linkedin.png" alt="github" width="64" height="64" />
			<div className="ml-5">
				<div className="text-gray-900">Visit my LinkedIn profile</div>
				<div className="text-xs text-gray-600">Click me</div>
			</div>
		</a>
	</div>
);

export default GithubCard;
