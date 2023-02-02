const App = document.querySelector('.root');
let multiplicationTable = document.createElement('div');
App.insertAdjacentElement('beforeend', multiplicationTable);
multiplicationTable.className = `multiplicationTable`;

/* ShowNumber Task */
/* a  = 10 - меньше число, b  = 20 - більше число */
const showNumber = (a, b) => {
	let numbersArray = document.createElement('div');
	numbersArray.className = `showNumber`;
	App.insertAdjacentElement('afterbegin', numbersArray);

	for (let i = a; i <= b; i++) {
		numbersArray.insertAdjacentHTML('beforeend', `<span>${i}, </span>`);
	}
};

showNumber(10, 20);

/* SquadNumber */
const squadNumber = (a, b) => {
	let squadNumberShow = document.createElement('div');
	squadNumberShow.className = `squadNumber`;
	App.insertAdjacentElement('beforeend', squadNumberShow);
	for (let i = a; i <= b; i++) {
		squadNumberShow.insertAdjacentHTML('beforeend', `<span>${i * i}, </span>`);
	}
};

squadNumber(10, 20);
/*  */

/* multiplication table 7 */
const tableNumber = (num) => {
	let table = document.createElement('div');
	table.classList.add('table');
	multiplicationTable.insertAdjacentElement('beforeend', table);
	for (let i = 1; i <= 10; i++) {
		table.insertAdjacentHTML('beforeend', `<div>${i} x ${num} = ${i * num}</div>`);
	}
};
tableNumber(1);
tableNumber(2);
tableNumber(3);
tableNumber(4);
tableNumber(5);
tableNumber(6);
tableNumber(7);
tableNumber(8);
tableNumber(9);

/*  */
/* Arithmetic Mean  */

const arithmeticAllNumber = (a, b) => {
	let sum = 0;
	let acc = 0;

	for (let i = a; i <= b; i++) {
		sum = sum + i;
		acc++;
	}

	return sum / acc;
};

console.log(arithmeticAllNumber(1, 500));
