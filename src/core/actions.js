import { rndString } from '@laufire/utils/random';
import context from './context';

const refreshIDLength = 4;

const updateQuestion = ({ state, data }) => ({
	question: data === state.question
		? rndString(refreshIDLength)
		: state.question,
	inputQuestion: data === state.question ? '' : data,
	score: data === state.question
		? state.score + context.config.increment
		: state.score,
});

const actions = {
	updateQuestion,
};

export default actions;
