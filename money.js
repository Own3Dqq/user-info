/* 
  1) Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
  2) Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
  3) Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
  4) Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
  5) Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

можно просто в консоль
*/
/* 1) */
const rationalNumber = (a, b) => {
	let num = a;
	for (let i = 0; num < b; i++) {
		num = num + 0.5;
		console.log(num);
	}
};

rationalNumber(20, 30);

/* 2) */
const getExchangeRate = () => {
	let currentExchangeRate = 27;
	const step = 10;

	for (let i = 10; i <= 100; i++) {
		let rateByStep = currentExchangeRate * i;
		if (rateByStep % step === 0) {
			console.log(`Exchange Rate: ${i}$ it's ${rateByStep}₴`);
		}
	}
};

getExchangeRate();

/* 3) */
const squadNumber = (num) => {
	if (!isNaN(num)) {
		for (let i = 1; i < 100; i++) {
			if (i ** 2 < num) {
				console.log(i);
			}
		}
	}
};

squadNumber(78);

/* 4) */
const primeNumber = (num) => {
	console.log(num % 2 !== 0 ? num : `${num} it's not prime number`);
};

primeNumber(3);
primeNumber(12);

/* 5) */
const degreeNumberThree = (num) => {
	if (!isNaN(num)) {
		for (let i = 0; i < 30; i++) {
			if (3 ** i === num) {
				console.log(`${i} degree`);
			}
		}
	}
};

degreeNumberThree(523);
