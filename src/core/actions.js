import checkInput from '../services/checkQuestion';
import { rndString } from '@laufire/utils/random';
const refreshIDLength = 4;

const updateQuestion = ({ state, data }) => ({
	inputQuestion: checkInput(state.question, data) ? '' : data,
	score:
	state.score + checkInput(state.question, data),
	question:
	checkInput(state.question, data)
		? rndString(refreshIDLength)
		: state.question,
});

const actions = {
	updateQuestion,
};

export default actions;
