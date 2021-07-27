import { React } from 'react';
import context from '../core/context';

const Score = () =>
	<>score: { context.state.score }</>;

export default Score;
