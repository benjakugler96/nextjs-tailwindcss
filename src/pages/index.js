import { useRouter } from 'next/router';
import { PageHeader, Content, Navbar, Techs } from '../components';

const Home = () => {
	const router = useRouter();
	const handleRedirect = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		let country;
		switch (e.target.value) {
			case 'United States':
				country = 'US';
				break;
			case 'Canada':
				country = 'CA';
				break;
			case 'Mexico':
				country = 'MX';
				break;
			default:
				return;
		}
		router.push(`/${country}`);
	};

	return (
		<div>
			<Navbar page="home" />
			<PageHeader title="Welcome!" backButton={false} />
			<Content>
				<div className="bg-white p-12 mb-12 rounded">
					<div class="max-w-sm m-auto">
						<label
							for="country"
							class="block text-sm font-medium text-gray-700"
						>
							Please, select a country
						</label>
						<select
							onChange={handleRedirect}
							id="country"
							name="country"
							autocomplete="country"
							class="mt-1 block w-full py-2 px-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option selected disabled hidden></option>
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>
				</div>
				<Techs />
			</Content>
		</div>
	);
};

export default Home;
