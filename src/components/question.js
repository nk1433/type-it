/* eslint-disable max-len */
import { React } from 'react';
import context from '../core/context';
import StringServices from '../services/stringServices';

const Question = () => {
	const data = StringServices.compareString(context.state);

	return (
		<>
			<span>Question: </span>
			<span style={ { color: 'red' } }>
				{ data.highlight}
			</span>
			<span>
				{ data.remainingQuestion}
			</span>
		</>
	);
};

export default Question;
