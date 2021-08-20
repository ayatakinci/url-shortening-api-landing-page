import React from 'react';

import Hero from './sections/Hero';
import LinkShortener from './sections/LinkShortener';
import Statistics from './sections/Statistics';
import GetStarted from './sections/GetStarted';
import Footer from './sections/Footer';

function App() {
	return (
		<main>
			<Hero />
			<div className="gray-bg">
				<LinkShortener />
				<Statistics />
			</div>
			<GetStarted />
			<Footer />
		</main>
	);
}

export default App;
