import React from 'react'
import Card from './components/Card';

const App = () => {
	return (
		<div>
			<Card width='200px' height='200px'>
				<div><button>Кнопка</button></div>
				<div><button>Кнопка</button></div>
				<div><button>Кнопка</button></div>
			</Card>
		</div>
	);
};

export default App;