import checkInput from '../services/checkQuestion';

const increaseCount = ({ state, data }) => ({
	count: state.count + checkInput(state.refreshID, data),
});

const actions = {
	increaseCount,
};

export default actions;
