import { React, useEffect } from 'react';
import './App.scss';
import Highlight from './components/highlight';
import Input from './components/input';
import Question from './components/question';
// import Input from './components/input';
import context from './core/context';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			{ Highlight() }
			{ Question() }
			<div>{ Input() }</div>
		</div>
	);
};

export default App;
