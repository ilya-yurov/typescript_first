import React from 'react'
import Card, { CardVariant } from './components/Card';

const App = () => {
	return (
		<div>
			<Card onClick={(num) => alert(`click! ${num}`)} variant={CardVariant.primary} width='200px' height='200px'>
				<div><button>Кнопка</button></div>
				<div><button>Кнопка</button></div>
				<div><button>Кнопка</button></div>
			</Card>
		</div>
	);
};

export default App;