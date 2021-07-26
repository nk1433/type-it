import { React, useEffect } from 'react';
import './App.scss';
import input from './components/input';
import context from './core/context';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>Question: { context.state.refreshID }</div>
			<div>{ input() }</div>
			count: { context.state.count }
		</div>
	);
};

export default App;
