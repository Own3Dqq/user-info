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
	for (let i = a; i <= b; i += 0.5) {
		console.log(i);
	}
};

rationalNumber(20, 30);

/* 2) */
const getExchangeRate = () => {
	let currentExchangeRate = 27;

	for (let i = 10; i <= 100; i += 10) {
		let rateByStep = currentExchangeRate * i;
		console.log(`Exchange Rate: ${i}$ it's ${rateByStep}₴`);
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
const isPrimeNumber = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};

console.log(isPrimeNumber(3));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(12));

/* 5) */
const isThirdDegree = (num) => {
	if (!isNaN(num)) {
		let thirdDegree = false;
		for (let i = 0; i < 30; i++) {
			if (3 ** i === num) {
				thirdDegree = true;
			}
		}

		return thirdDegree;
	}
};

console.log(isThirdDegree(9));
console.log(isThirdDegree(13));
console.log(isThirdDegree(81));
