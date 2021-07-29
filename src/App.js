import { React, useEffect } from 'react';
import './App.scss';
import Clock from './components/clock';
import Input from './components/input';
import Question from './components/question';
import Score from './components/score';
import Ticker from './services/ticker';

const App = () => {
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ Question() }
			<div>{ Input() }</div>
			<div>{ Score() }</div>
			<div>{ Clock() }</div>
		</div>
	);
};

export default App;
