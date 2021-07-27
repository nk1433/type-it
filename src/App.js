import { React, useEffect } from 'react';
import './App.scss';
import Input from './components/input';
import Question from './components/question';
import Score from './components/score';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ Question() }
			<div>{ Input() }</div>
			<div>{ Score() }</div>
		</div>
	);
};

export default App;
