import { React } from 'react';
import context from '../core/context';

const rotate = -36;

const degree = () => ({
	transform: `rotate(${ context.state.time * rotate }deg)`,
});

const Clock = () =>
	<div className="clock">
		<p>Time: { context.state.time }</p>
		<div className="circle">
			<div style={ degree() } className="minutes"/>
		</div>
	</div>;

export default Clock;
