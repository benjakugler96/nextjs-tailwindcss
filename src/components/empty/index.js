const TEXT = 'Opss! No shows found for this country.';

const Empty = ({ text = TEXT }) => (
	<div className="text-center p-12 h-full">{text}</div>
);

export default Empty;
