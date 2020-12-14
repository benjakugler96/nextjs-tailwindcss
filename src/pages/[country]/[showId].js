import axios from 'axios';
import Error from 'next/error';
import { Content, Navbar, PageHeader, ShowDetails } from '../../components';

const Show = ({ showDetails = {}, error, country = '' } = {}) => {
	const {
		image: { original } = {},
		language,
		name,
		premiered,
		summary,
		officialSite,
		type,
		_embedded: { cast } = {},
		rating: { average } = {},
	} = showDetails;
	return (
		<div>
			<Navbar details page={`/${country}`} />
			{error ? (
				<Error statusCode={error} />
			) : (
				<>
					<PageHeader title={`Show: ${name}`} backUrl={`/${country}`} />
					<Content>
						<ShowDetails
							name={name}
							language={language}
							site={officialSite}
							premiered={premiered}
							summary={summary}
							type={type}
							image={original}
							rating={average}
						/>
					</Content>
				</>
			)}
		</div>
	);
};

export const getServerSideProps = async ({ query = {} }) => {
	const { showId, country } = query;
	try {
		const response = await axios.get(
			`https://api.tvmaze.com/shows/${showId}?embed=cast`
		);
		return {
			props: {
				showDetails: response.data,
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
};

export default Show;
