import Link from 'next/link';

const defaultImg = 'http://via.placeholder.com/210x295?text=?';
const Thumbnail = ({ show = {}, as = '', href = '' }) => (
	<Link href={href} as={as}>
		<div cldivssName="text-center shadow-md p-4 m-1 cursor-pointer">
			<img src={show.image?.medium || defaultImg} />
			<h3>{show.name}</h3>
		</div>
	</Link>
);

export default Thumbnail;
