import { rndString } from '@laufire/utils/random';

const questionIDLength = 4;
const millisecond = 1000;
const second = 1;

const config = {
	countStart: 0,
	increment: 1,
	question: '',
	matchedInitialValue: '',
	randomQuestion: rndString(questionIDLength),
	time: 10,
	delay: millisecond * second,
};

export default config;
