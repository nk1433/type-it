import context from '../core/context';

const start = () => {
	const { delay } = context.config;

	setInterval(() => context.actions.decrementTime(), delay);
};

const Ticker = {
	start,
};

export default Ticker;
