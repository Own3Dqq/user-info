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

// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// /* 1) */
// const getCountAndSumPositives = (array) => {
// 	const countPositives = array.filter((el) => el > 0);
// 	const sumPositives = countPositives.reduce((a, b) => a + b);

// 	return [countPositives.length, sumPositives];
// };

// console.log(getCountAndSumPositives(arr));

// /* 2) */
// const getMinWithIndex = (array) => {
// 	const min = Math.min(...arr);
// 	const minIndex = array.findIndex((el) => el === min);

// 	return [min, minIndex];
// };

// /* 3) */

// const getMaxWithIndex = (array) => {
// 	const max = Math.max(...arr);
// 	const maxIndex = array.findIndex((el) => el === max);

// 	return [max, maxIndex];
// };

// console.log(getMaxWithIndex(arr));

// /* 4) */

// const getQuantityNegativeNumber = (array) => {
// 	const negativeNumberArr = array.filter((element) => element < 0);

// 	return negativeNumberArr.length;
// };

// console.log(getQuantityNegativeNumber(arr));

// /* 5) */

// const getAllEvenPositivNumber = (array) => {
// 	const EvenNumberArr = array.filter((element) => {
// 		if (element % 2 !== 0 && element > 0) {
// 			return element;
// 		}
// 	});

// 	return EvenNumberArr.length;
// };

// console.log(getAllEvenPositivNumber(arr));

// /* 6) */
// const getAllOddPositivNumber = (array) => {
// 	const oddNumberArr = array.filter((element) => element % 2 && element > 0);

// 	return oddNumberArr.length;
// };

// console.log(getAllOddPositivNumber(arr));

// /* 7) */

// const getSumPositivOddNumber = (array) => {
// 	let sum = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		element > 0 && element % 2 === 0 ? (sum += element) : undefined;
// 	}

// 	return sum;
// };

// console.log(getSumPositivOddNumber(arr));

// /* 8) */

// const getSumPositivEvenNumber = (array) => {
// 	let sum = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		element > 0 && element % 2 !== 0 ? (sum += element) : undefined;
// 	}

// 	return sum;
// };

// console.log(getSumPositivEvenNumber(arr));

// /* 9) */

// const getMultiplicationNumbers = (array) => {
// 	let sum = 1;

// 	const getPositivArray = array.filter((element) => element > 0);
// 	console.log(getPositivArray);

// 	for (let i = 0; i < getPositivArray.length; i++) {
// 		sum = sum * getPositivArray[i];
// 		console.log(sum);
// 	}

// 	return sum;
// };

// console.log(getMultiplicationNumbers(arr));

// /* 10) */

// const getMaxElementArray = (array) => {
// 	const maxElement = Math.max(...array);

// 	const changeElementArray = array.map((element) => {
// 		if (element !== maxElement) {
// 			return (element = 0);
// 		} else {
// 			return element;
// 		}
// 	});

// 	return changeElementArray;
// };

// console.log(getMaxElementArray(arr));

/*  */

/* 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву. */

const array = [{ value: 96 }, 4, 'split', 7, { vw: 'Jetta', number: 1841, region: 'СВ' }, '4', 'John'];

function getAverageNumber(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Error: Input parameter must be an array.');
	}
	const numbers = arr.filter((item) => typeof item === 'number');
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
}

console.log(getAverageNumber(arr));

/* 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. */

const doMath = (x, y, sign) => {
	if ((typeof x === 'number', typeof y === 'number', typeof sign === 'string')) {
		switch (sign) {
			case '+':
				return x + y;
			case '-':
				return x - y;
			case '*':
				return x * y;
			case '/':
				return x / y;
			case '%':
				return x % y;
			case '^':
				return x ** y;

			default:
				throw TypeError('Error: Parameter not found.');
		}
	}
};

console.log(doMath(22, 2, '^'));

/* 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач. */

const generate2dArray = () => {
	const widthMainArray = +prompt('Enter the length of the main array');
	const widthSecondaryArray = +prompt('Enter the length of the internal array in the main array');

	const madeMainArrays = (value) => {
		const containerArray = [];

		for (let i = 0; i < value; i++) {
			containerArray.push([]);
		}

		return containerArray;
	};

	const mainArr = madeMainArrays(widthMainArray);

	mainArr.map((item, index) => {
		for (let i = 1; i <= widthSecondaryArray; i++) {
			const userValue = prompt(`Enter the value in the main array #${index + 1}, internal array #${i}`);

			item.push(new Array(userValue));
		}
	});

	alert(JSON.stringify(mainArr));
};

generate2dArray();

/* 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. */

function removeChars(inputString, charsRemoveArray) {
	for (let i = 0; i < charsRemoveArray.length; i++) {
		const regex = new RegExp(charsRemoveArray[i], 'g');
		inputString = inputString.toLowerCase().replace(regex, '');
	}
	return inputString;
}

console.log(removeChars('HOLLYWOOD', ['a', 'h', 'd']));
