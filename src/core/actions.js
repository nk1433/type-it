import checkInput from '../services/checkQuestion';
import { rndString } from '@laufire/utils/random';
import context from './context';
const refreshIDLength = 4;

const updateQuestion = ({ state, data }) => (checkInput(state.question, data)
	? {	inputQuestion: '',
		score:
	state.score + context.config.increment,
		question: rndString(refreshIDLength) }
	: {
		inputQuestion: data,
	});

const actions = {
	updateQuestion,
};

export default actions;
