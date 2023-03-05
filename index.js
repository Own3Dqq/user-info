/* function getUserInfo() {
	const checkUserDate = (number) => {
		const currentYear = new Date().getFullYear();

		if (number && !isNaN(+number) && number.length === 4) {
			return currentYear - number;
		} else {
			alert('Wrong value, please try again...');
			return getUserYear();
		}
	};

	const checkUserCity = (str) => {
		const string = str.toLowerCase();
		const capitals = ['London', 'Kiev', 'Washington'];
		const user = capitals.find((item) => {
			const element = item.toLowerCase().trim();

			return string === element;
		});

		return user ? `You live in capital ${str}` : `You live in city ${str}`;
	};

	const checkUserSport = (str) => {
		const string = str.toLowerCase().trim();
		const popularSport = [
			{ name: 'Box', celebrity: 'Vitalyi Klichko' },
			{ name: 'UFC', celebrity: 'Conor McGregor' },
			{ name: 'Football', celebrity: 'Andrey Schevchenko' },
			{ name: 'Volleyball', celebrity: 'Yulia Gerasimova' },
		];

		const findSearchAnswear = popularSport.find((item) => {
			return item.name.toLowerCase() === string;
		});

		return findSearchAnswear ? `Cool! Do you want be like ${findSearchAnswear.celebrity}` : '';
	};

	const getUserYear = () => {
		const userDate = prompt('Enter your born year');
		return checkUserDate(userDate);
	};

	const getUserCity = () => {
		const userCity = prompt('Where do you live?');
		return userCity ? checkUserCity(userCity) : `Sorry, didn't entered your city`;
	};

	const getUserSport = () => {
		const userSport = prompt('What your favorit sport?');
		return userSport ? checkUserSport(userSport) : alert('It is a pity that you did not want to enter sport');
	};

	const personalInfo = {
		year: getUserYear(),
		city: getUserCity(),
		sport: getUserSport(),
	};

	return alert(`Your age ${personalInfo.year}, ${personalInfo.city}, ${personalInfo.sport}`);
}

getUserInfo(); */

/* 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву. */

const arr = [{ value: 96 }, 4, 'split', 7, { vw: 'Jetta', number: 1841, region: 'СВ' }, '4', 'John'];

function getAverageNumber(arr) {
	if (!Array.isArray(arr)) {
		return 'Error: Input parameter must be an array.';
	}
	const numbers = arr.filter((item) => typeof item === 'number');
	const sum = numbers.reduce((acc, cur) => acc + cur, 0);
	return sum / numbers.length;
}

console.log(getAverageNumber(arr));

/* 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. */

const doMath = (x, y, znak) => {
	if ((typeof x === 'number', typeof y === 'number', typeof znak === 'string')) {
		switch (znak) {
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
				console.log('Error: Parameter not found.');
		}
	}
};

console.log(doMath(22, 2, '^'));

/* 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач. */

/* 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. */

function removeChars(inputString, ...charsRemove) {
	for (let i = 0; i < charsRemove.length; i++) {
		const regex = new RegExp(charsRemove[i], 'g');
		inputString = inputString.toLowerCase().replace(regex, '');
	}
	return inputString;
}

console.log(removeChars('HOLLYWOOD', 'a', 'h', 'd'));
