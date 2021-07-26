import { React } from 'react';
// import config from '../core/config';
import context from '../core/context';

const Input = () =>
	<input
		type="text"
		value={ context.state.inputQuestion }
		onChange={ (event) =>
			context.actions.updateQuestion(event.target.value) }
	/>;

export default Input;
