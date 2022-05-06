import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const body = document.querySelector('body');
const DARKTHEMECLASS = 'dark';

function switchTheme(e) {
	if(e.target.checked) {
		body.classList.add(DARKTHEMECLASS);
	} else {
		body.classList.remove(DARKTHEMECLASS);
	}
}

function ListTitle() {
	return React.createElement(
	'h1', {style: { color: '#999', fontSize: '19px'}},
	'Solar system planets:'
	)
}

function ListOfPlanets() {
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

function Slider() {
	return (
		<label className='switch' htmlFor='checkbox'>
    	<input type='checkbox' id='checkbox' onClick={switchTheme} />
    	<div className='slider round'></div>
	</label>
	)
}

function SolarSystem() {
	return (
		<>
		<ListTitle/>
		<ListOfPlanets/>
		<Slider/>
		</>
	)
}

root.render(SolarSystem());
