import { PageHeader, Content, Navbar, Techs } from '../components';

const Home = () => (
	<div>
		<Navbar />
		<PageHeader title="Welcome!" backButton={false} />
		<Content>
			<div>Home</div>
			<Techs />
		</Content>
	</div>
);

export default Home;
