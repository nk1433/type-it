import { React } from 'react';
import context from '../core/context';
import matchString from '../services/highlight';

const Highlight = () =>
	<span style={ { color: 'red' } }>
		{ matchString(context.state.question,
			context.state.inputQuestion).highlight}
	</span>;

export default Highlight;
