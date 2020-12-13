import axios from 'axios';
import {
	Cast,
	Content,
	Navbar,
	PageHeader,
	ShowDetails,
} from '../../components';

const Show = ({ showDetails, error } = {}) => {
	if (error) {
		return <div>error ocurred</div>;
	}
	const {
		image: { original },
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
			<Navbar />
			<PageHeader title={`Show: ${name}`} backUrl="/us/" />
			<Content>
				<div>
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
					{/* <Cast cast={cast} /> */}
				</div>
			</Content>
		</div>
	);
};

export const getServerSideProps = async ({ query = {} }) => {
	const { showId } = query;
	try {
		const response = await axios.get(
			`https://api.tvmaze.com/shows/${showId}?embed=cast`
		);
		return {
			props: {
				showDetails: response.data,
			},
		};
	} catch (error) {
		return {
			props: {
				error,
			},
		};
	}
};

export default Show;
