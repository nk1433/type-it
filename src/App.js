import { React, useEffect } from 'react';
import './App.scss';
import Input from './components/input';
import Question from './components/question';
import Score from './components/score';
import context from './core/context';
// import SampleService from './services/sample';
import Ticker from './services/ticker';

const App = () => {
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ Question() }
			<div>{ Input() }</div>
			<div>{ Score() }</div>
			<div>Time: { context.state.time }</div>
		</div>
	);
};

export default App;
