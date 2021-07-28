import { rndString } from '@laufire/utils/random';
import context from './context';
import StringServices from '../services/stringServices';

const refreshIDLength = 4;

// const checkInput = (data, question) => (data === question ? 1 : 0);

const updateQuestion = ({ state, data }) => {
	const matched = StringServices.checkInput(state.question, data);

	return {
		question: matched
			? rndString(refreshIDLength)
			: state.question,
		inputQuestion: matched ? '' : data,
		score: matched
			? state.score + context.config.increment
			: state.score,
	};
};

const actions = {
	updateQuestion,
};

export default actions;
