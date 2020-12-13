const Cast = ({ cast }) => {
	const renderCast = () =>
		cast.map(({ person } = {}, i) => {
			const isOdd = i % 2;
			return (
				<div
					className={`${
						isOdd ? 'bg-gray-50' : 'bg-white'
					} px-4 py-5 sm:px-6 grid-cols-2 grid`}
				>
					<dt class="text-sm font-medium text-gray-500">
						<img src={person.image?.medium} className="h-24 w-18 rounded-md" />
					</dt>
					<dd class="mt-1 text-gray-900">
						<div className="text-md">{person.name}</div>
						<div>{person.birthday}</div>
						<div>{person.country.name}</div>
					</dd>
				</div>
			);
		});
	return (
		<div class="bg-white shadow-md overflow-hidden sm:rounded-lg mb-5 mx-5">
			{console.log(cast, 'hola')}
			<div class="px-4 py-5 sm:px-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Cast</h3>
				<p class="mt-1 max-w-2xl text-sm text-gray-500">
					For more info, you can click on any row.
				</p>
			</div>
			<div class="border-t border-gray-200">
				<dl>{renderCast()}</dl>
			</div>
		</div>
	);
};

export default Cast;
