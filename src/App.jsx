import React from 'react';

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
		</main>
	);
}

export default App;
