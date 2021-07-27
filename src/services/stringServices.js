const compareString = ({ question, inputQuestion }) => {
	const splitIndex = question.split('').findIndex((item, index) =>
		item !== inputQuestion[index]);

	return {
		highlight: question.substr(0, splitIndex),
		remainingQuestion: splitIndex < 0
			? question.substr(question.length)
			: question.substr(splitIndex),
	};
};

const checkInput = (data, question) => (data === question ? 1 : 0);

const stringServices = {
	compareString,
	checkInput,
};

export default stringServices;
