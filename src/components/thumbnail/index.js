import Link from 'next/link';

const defaultImg = 'http://via.placeholder.com/210x295?text=?';
const Thumbnail = ({ show = {}, as = '', href = '' }) => (
	<Link href={href} as={as}>
		<a>
			<div className="text-center m-1 cursor-pointer group relative">
				<img
					src={show.image?.medium || defaultImg}
					className="rounded h-60 lg:h-48 shadow-md"
				/>
				<div className="hidden group-hover:flex absolute top-0 bottom-0 w-full bg-gray-300 bg-opacity-50 items-center justify-center text-black">
					<span>{show.name}</span>
				</div>
			</div>
		</a>
	</Link>
);
export default Thumbnail;
