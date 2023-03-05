/* 
  1) Знайти суму та кількість позитивних елементів.
  2) Знайти мінімальний елемент масиву та його порядковий номер.
  3) Знайти максимальний елемент масиву та його порядковий номер.
  4) Визначити кількість негативних елементів.
  5) Знайти кількість непарних позитивних елементів.
  6) Знайти кількість парних позитивних елементів.
  7) Знайти суму парних позитивних елементів.
  8) Знайти суму непарних позитивних елементів.
  9) Знайти добуток позитивних елементів.
  10) Знайти найбільший серед елементів масиву, ост альні обнулити.
*/

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

/* 1) */
const getCountAndSumPositives = (array) => {
	const countPositives = array.filter((el) => el > 0);
	const sumPositives = countPositives.reduce((a, b) => a + b);

	return [countPositives.length, sumPositives];
};

console.log(getCountAndSumPositives(arr));

/* 2) */
const getMinWithIndex = (array) => {
	const min = Math.min(...arr);
	const minIndex = array.findIndex((el) => el === min);

	return [min, minIndex];
};

/* 3) */

const getMaxWithIndex = (array) => {
	const max = Math.max(...arr);
	const maxIndex = array.findIndex((el) => el === max);

	return [max, maxIndex];
};

console.log(getMaxWithIndex(arr));

/* 4) */

const getQuantityNegativeNumber = (array) => {
	const negativeNumberArr = array.filter((element) => element < 0);

	return negativeNumberArr.length;
};

console.log(getQuantityNegativeNumber(arr));

/* 5) */

const getAllEvenPositivNumber = (array) => {
	const EvenNumberArr = array.filter((element) => {
		if (element % 2 !== 0 && element > 0) {
			return element;
		}
	});

	return EvenNumberArr.length;
};

console.log(getAllEvenPositivNumber(arr));

/* 6) */
const getAllOddPositivNumber = (array) => {
	const oddNumberArr = array.filter((element) => element % 2 && element > 0);

	return oddNumberArr.length;
};

console.log(getAllOddPositivNumber(arr));

/* 7) */

const getSumPositivOddNumber = (array) => {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		element > 0 && element % 2 === 0 ? (sum += element) : undefined;
	}

	return sum;
};

console.log(getSumPositivOddNumber(arr));

/* 8) */

const getSumPositivEvenNumber = (array) => {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		element > 0 && element % 2 !== 0 ? (sum += element) : undefined;
	}

	return sum;
};

console.log(getSumPositivEvenNumber(arr));

/* 9) */

const getMultiplicationNumbers = (array) => {
	let sum = 1;

	const getPositivArray = array.filter((element) => element > 0);
	console.log(getPositivArray);

	for (let i = 0; i < getPositivArray.length; i++) {
		sum = sum * getPositivArray[i];
		console.log(sum);
	}

	return sum;
};

console.log(getMultiplicationNumbers(arr));

/* 10) */

const getMaxElementArray = (array) => {
	const maxElement = Math.max(...array);

	const changeElementArray = array.map((element) => {
		if (element !== maxElement) {
			return (element = 0);
		} else {
			return element;
		}
	});

	return changeElementArray;
};

console.log(getMaxElementArray(arr));
