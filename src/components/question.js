/* eslint-disable max-len */
import { React } from 'react';
import context from '../core/context';

const Question = () =>
	// <span>
	// 	{ context.state.question.substr(context.actions.matchString(context.state.question, context.state.inputQuestion))}
	// </span>;
	<span>{ context.state.remainingQuestion }</span>;

export default Question;
