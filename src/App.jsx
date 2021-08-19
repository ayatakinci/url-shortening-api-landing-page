import React from 'react';
import GetStarted from './sections/GetStarted';

import Hero from './sections/Hero';
import LinkShortener from './sections/LinkShortener';
import Statistics from './sections/Statistics';

function App() {
	return (
		<main>
			<Hero />
			<div className="gray-bg">
				<LinkShortener />
				<Statistics />
			</div>
			<GetStarted />
		</main>
	);
}

export default App;
