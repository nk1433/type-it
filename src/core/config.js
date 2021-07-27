import { rndString } from '@laufire/utils/random';

const questionIDLength = 4;

const config = {
	countStart: 0,
	increment: 1,
	question: '',
	matchedInitialValue: '',
	randomQuestion: rndString(questionIDLength),
};

export default config;
