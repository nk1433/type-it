import { React } from 'react';
import context from '../core/context';

const Highlight = () =>
	// <span style={ { color: 'red' } }>
	// 	{ context.actions.matchString(context.state.question,
	// 		context.state.inputQuestion)}
	// </span>;
	<span style={ { color: 'red' } }>{ context.state.matchedString }</span>;

export default Highlight;
