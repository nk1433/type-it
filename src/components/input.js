import { React } from 'react';
// import config from '../core/config';
import context from '../core/context';

const Input = () =>
	<form onSubmit={ (event) => context.actions.increaseCount(event) }>
		<input type="text" name="question"/>
		<button>Check</button>
	</form>;

export default Input;
