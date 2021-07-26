import { React, useEffect } from 'react';
import './App.scss';
import Input from './components/input';
import context from './core/context';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>Question: { context.state.question }</div>
			<div>{ Input() }</div>
			Score: { context.state.score }
		</div>
	);
};

export default App;
