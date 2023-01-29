function getUserInfo() {
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

getUserInfo();
