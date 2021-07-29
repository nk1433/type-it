import context from './context';
import StringServices from '../services/stringServices';
import faker from 'faker';

const updateQuestion = ({ state, data }) =>
	(StringServices.checkInput(state.question, data)
		? {
			question: faker.random.word(),
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
			question: faker.random.word(),
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
