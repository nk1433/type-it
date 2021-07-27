/* eslint-disable max-len */
import { React } from 'react';
import context from '../core/context';
import matchString from '../services/highlight';

const Question = () =>
	<span>
		{ matchString(context.state.question,
			context.state.inputQuestion).remainingQuestion}
	</span>;

export default Question;
