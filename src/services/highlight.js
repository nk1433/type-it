const matchString = (question, data) => {
	const splitIndex = question.split('').findIndex((item, index) =>
		item !== data[index]);

	return {
		highlight: question.substr(0, splitIndex),
		remainingQuestion: splitIndex < 0
			? question.substr(question.length)
			: question.substr(splitIndex),
	};
};

export default matchString;
