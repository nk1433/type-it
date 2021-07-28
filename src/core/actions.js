import { rndString } from '@laufire/utils/random';
import context from './context';
import StringServices from '../services/stringServices';

const refreshIDLength = 4;

const updateQuestion = ({ state, data }) =>
	(StringServices.checkInput(state.question, data)
		? {
			question: rndString(refreshIDLength),
			inputQuestion: '',
			score: state.score + context.config.increment,
			time: context.config.time,
		}
		: {
			inputQuestion: data,
		});

const decrementTime = ({ state }) => {
	const reset = state.time === 0;

	return {
		time: reset
			? context.config.time
			: state.time - context.config.increment,
		question: reset ? rndString(refreshIDLength) : state.question,
		inputQuestion: reset ? '' : state.inputQuestion,
	};
};

const actions = {
	updateQuestion,
	decrementTime,
};

export default actions;
