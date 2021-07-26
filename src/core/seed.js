import config from './config';
import { rndString } from '@laufire/utils/random';

const questionIDLength = 4;

const seed = {
	score: config.countStart,
	question: rndString(questionIDLength),
	inputQuestion: config.question,
};

export default seed;
