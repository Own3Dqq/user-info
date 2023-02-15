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
const getAmountPositivElement = (array) => {
	let sum = 0;
	const arrayPositivElement = array.filter((element) => {
		if (element > 0) {
			sum += element;
			return element;
		}
	});

	return [arrayPositivElement.length, sum];
};

console.log(getAmountPositivElement(arr));

/* 2) */
const getMinElement = (array) => {
	let minElement = 0;
	let positionIntoArr = 0;

	if (array.length > 0) {
		array.forEach((element, index) => {
			if (element < minElement) {
				minElement = element;
				positionIntoArr = index + 1;
			}
			// element < minElement ? minElement = element : false
		});
		return [minElement, positionIntoArr];
	}
};

console.log(getMinElement(arr));

/* 3) */

const getMaxElement = (array) => {
	let maxElement = 0;
	let positionIntoArr = 0;

	if (array.length > 0) {
		array.forEach((element, index) => {
			if (element > maxElement) {
				maxElement = element;
				positionIntoArr = index + 1;
			}
		});
		return [maxElement, positionIntoArr];
	}

	return;
};

console.log(getMaxElement(arr));

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
	const oddNumberArr = array.filter((element) => {
		if (element % 2 === 0 && element > 0) {
			return element;
		}
	});

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
	const acc = 0;

	const maxElement = Math.max(...array);

	const changeElementArray = array.map((element) => {
		if (element !== maxElement) {
			return (element = 0);
		} else if (element === maxElement) {
			return element;
		}
	});

	return changeElementArray;
};

console.log(getMaxElementArray(arr));
