import Header from './components/Header';
import ScrollSections from './components/ScrollSections';

export default function Page() {
	return (
		<div className="bg-gradient-rainbow min-h-screen flex flex-col">
			<Header />
			<main>
				<ScrollSections />
			</main>
		</div>
	);
}
