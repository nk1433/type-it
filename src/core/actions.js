// import checkInput from '../services/checkQuestion';
// import { rndString } from '@laufire/utils/random';
// import context from './context';
// const refreshIDLength = 4;

const matchString = (question, data) => {
	const splitIndex = question.split('').findIndex((item, index) =>
		item !== data[index]);

	// eslint-disable-next-line no-console
	console.log(
		'highlight:', question.substr(0, splitIndex),
		splitIndex
	);
	return splitIndex < 0 ? question.length : splitIndex;
	// return {
	// 	highlight: question.substr(0, splitIndex),
	// 	remainingQuestion: splitIndex < 0 ? question.substr(question.length) : question.substr(splitIndex),
	// };
};

const updateQuestion = ({ state, data }) => ({
	matchedString: state.question.substr(0, matchString(state.question, data)),
	inputQuestion: data,
	remainingQuestion: state.question.substr(matchString(state.question, data)),
});

const actions = {
	updateQuestion,
	matchString,
};

export default actions;
