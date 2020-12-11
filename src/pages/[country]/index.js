import axios from 'axios';
import { Thumbnail, PageHeader, Content, Navbar } from '../../components';

const paths = [
	{ params: { country: 'ar' } },
	{ params: { country: 'us' } },
	{ params: { country: 'ca' } },
];

const Country = ({ shows = [], country = '' }) => {
	const renderShows = () =>
		shows.map((showItem, index) => (
			<li key={index}>
				<Thumbnail
					show={showItem.show}
					href="/[country]/[showId]"
					as={`/${country}/${showItem.show.id}`}
				/>
			</li>
		));
	return (
		<div>
			<Navbar />
			<PageHeader title={`Tv Shows for ${country.toUpperCase()}`} />
			<Content>
				<ul className="grid md:grid-cols-3 lg:grid-cols-5 justify-items-center">
					{renderShows()}
				</ul>
			</Content>
		</div>
	);
};

export async function getStaticPaths() {
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const country = params.country || '';
	const url = `http://api.tvmaze.com/schedule?country=${country}`;
	try {
		const response = await axios.get(url);
		return {
			props: {
				shows: response.data,
				country,
			},
		};
	} catch (error) {
		return {
			props: {
				error,
			},
		};
	}
}

export default Country;
