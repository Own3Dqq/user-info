const App = document.querySelector('.root');
let multiplicationTable = document.createElement('div');
App.insertAdjacentElement('beforeend', multiplicationTable);
multiplicationTable.className = `multiplicationTable`;

/*і */
/* Вивести на сторінку в один рядок через кому числа від 10 до 20 */
const showNumber = (a, b) => {
	let numbersArray = document.createElement('div');
	numbersArray.className = `showNumber`;
	App.insertAdjacentElement('afterbegin', numbersArray);

	if (!isNaN(a) && !isNaN(b) && a <= b) {
		for (let i = a; i <= b; i++) {
			numbersArray.insertAdjacentHTML('beforeend', `<span>${i}, </span>`);
		}
	}
};

showNumber(10, 20);

/*  */
/* Вивести квадрати чисел від 10 до 20 */
const squadNumber = (a, b) => {
	const squadNumberShow = document.createElement('div');
	squadNumberShow.className = `squadNumber`;
	App.insertAdjacentElement('beforeend', squadNumberShow);

	if (!isNaN(a) && !isNaN(b) && a <= b) {
		for (let i = a; i <= b; i++) {
			squadNumberShow.insertAdjacentHTML('beforeend', `<span>${i * i}, </span>`);
		}
	}
};

squadNumber(10, 20);

/*  */
/* Вивести таблицю множення на 7 */
const tableNumber = (num) => {
	const table = document.createElement('div');
	table.classList.add('table');
	multiplicationTable.insertAdjacentElement('beforeend', table);

	if (!isNaN(num && num > 0)) {
		for (let i = 1; i <= 10; i++) {
			table.insertAdjacentHTML('beforeend', `<div>${i} x ${num} = ${i * num}</div>`);
		}
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
/* Знайти середнє арифметичне всіх цілих чисел від 1 до 500  */
const arithmeticAllNumber = (a, b) => {
	let sum = 0;
	let acc = 0;

	if (!isNaN(a) && !isNaN(b) && a <= b) {
		for (let i = a; i <= b; i++) {
			sum = sum + i;
			acc++;
		}
	}

	return sum / acc;
};

arithmeticAllNumber(1, 500);

/*  */
/* Знайти суму всіх цілих чисел від 1 до 15 */

function calculateTotal(number) {
	let sum = 0;

	if (!isNaN(number) && number > 0) {
		for (let i = 1; i <= number; i++) {
			sum += i;
		}
	}

	return sum;
}
calculateTotal(15);

/*  */
/* Вивести суму лише парних чисел в діапазоні від 30 до 80.	 */
const sumAllDoubleNumber = (a, b) => {
	let arr = [];

	if (!isNaN(a) && !isNaN(b) && a <= b) {
		for (let i = 0; a < b; a++) {
			a % 2 === 0 ? arr.push(a) : undefined;
		}
	}

	return arr;
};

sumAllDoubleNumber(30, 80);

/*  */
/* Вивести всі числа в діапазоні від 100 до 200 кратні 3. */

const searchNumber = (a, b) => {
	let arr = [];
	for (let i = 0; a <= b; a++) {
		if (a % 3 === 0) {
			arr.push(a);
		}
	}
};
searchNumber(100, 200);

const findDivisors = (number) => {
	const dividers = [];
	const evenNumber = [];
	let sumEvenNumber = 0;

	/* дільники числа */
	if (!isNaN(number)) {
		for (let i = 0; i <= number; i++) {
			if (number % i === 0) {
				dividers.push(i);
			}
		}
	}

	/* кількість парних дільників числа */
	if (dividers.length) {
		for (let y = 0; y <= dividers.length; y++) {
			const elem = dividers[y];

			if (elem % 2 === 0) {
				evenNumber.push(elem);
			}
		}
	}

	/* сума парних дільників числа */
	for (let h = 0; h <= evenNumber.length; h++) {
		const elem = evenNumber[h];

		if (!isNaN(elem)) {
			sumEvenNumber = sumEvenNumber + elem;
		}
	}

	return dividers, evenNumber, sumEvenNumber;
};

findDivisors(10);
