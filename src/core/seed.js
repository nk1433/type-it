import config from './config';

const seed = {
	score: config.countStart,
	question: config.randomQuestion,
	inputQuestion: config.question,
	matchedString: config.matchedInitialValue,
	remainingQuestion: config.randomQuestion,
};

export default seed;
