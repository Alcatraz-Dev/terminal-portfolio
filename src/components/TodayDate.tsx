export default function TodayDate() {
	const renderDate = () => {
		const date = new Date();
		return date.toDateString();
	};
	return (
		<div>
			<h1 className="font-mono text-sm">Today is, {renderDate()}</h1>
		</div>
	);
}
