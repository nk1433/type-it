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

const decrementTime = ({ state }) =>
	(state.time === 0
		? {
			time: context.config.time,
			question: rndString(refreshIDLength),
			inputQuestion: '',
		}
		: {
			time: state.time - context.config.increment,
		});

const actions = {
	updateQuestion,
	decrementTime,
};

export default actions;
