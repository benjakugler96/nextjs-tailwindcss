import axios from 'axios';
import Error from 'next/error';
import { Thumbnail, PageHeader, Content, Navbar } from '../../components';

const paths = [
	{ params: { country: 'US' } },
	{ params: { country: 'CA' } },
	{ params: { country: 'MX' } },
	{ params: { country: 'us' } },
	{ params: { country: 'ca' } },
	{ params: { country: 'mx' } },
];

const Country = ({ shows = [], country = '', error }) => {
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
			{error ? (
				<Error statusCode={error} />
			) : (
				<>
					<PageHeader title={`Tv Shows for ${country.toUpperCase()}`} />
					<Content>
						<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 justify-items-center">
							{renderShows()}
						</ul>
					</Content>
				</>
			)}
		</div>
	);
};

export async function getStaticPaths() {
	return {
		paths,
		fallback: true,
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
				error: error.response?.status,
			},
		};
	}
}

export default Country;
