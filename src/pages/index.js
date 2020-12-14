import { useRouter } from 'next/router';
import countries from 'iso-3166-country-list';
import {
	Content,
	Footer,
	SocialCards,
	Navbar,
	PageHeader,
	Techs,
} from '../components';

const Home = () => {
	const router = useRouter();
	const handleRedirect = (e) => {
		e.preventDefault();
		router.push(`/${e.target.value}`);
	};

	return (
		<div>
			<Navbar page="home" />
			<PageHeader title="Welcome!" backButton={false} />
			<Content>
				<div className="bg-white p-6 md:p-12 mb-12 rounded">
					<div className="max-w-sm m-auto">
						<label
							htmlFor="country"
							className="block text-sm font-medium text-gray-700"
						>
							Please, select a country
						</label>
						<select
							defaultValue=""
							onChange={handleRedirect}
							id="country"
							name="country"
							autoComplete="country"
							className="mt-1 block w-full py-2 px-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option disabled hidden value="" className="text-gray-500">
								United States may work..
							</option>
							{countries.map((country, index) => (
								<option key={index} value={country.code}>
									{country.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<SocialCards />
				<Techs />
			</Content>
			<Footer />
		</div>
	);
};

export default Home;
