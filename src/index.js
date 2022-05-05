import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ListTitle = () => {
	return React.createElement(
	"h1", {style: { color: '#999', fontSize: '19px'}},
	"Solar system planets:"
	)
}
const ListOfPlanets = () => {
	return (
	<ul className='planets-list'>
		<li>Mercury</li>
		<li>Venus</li>
		<li>Earth</li>
		<li>Earth</li>
		<li>Mars</li>
		<li>Jupiter</li>
		<li>Saturn</li>
		<li>Uranus</li>
		<li>Neptune</li>
	</ul>
	)
}
const SolarSystem = () => {
	return (
		<>
		<ListTitle></ListTitle>
		<ListOfPlanets></ListOfPlanets>
		</>
	)
}

root.render(SolarSystem());
