function debounce(func, duration) {
	let timeoutId;

	return function () {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		const context = this;
		const args = arguments;

		timeoutId = setTimeout(() => {
			func.apply(context, args);
		}, duration);
	};
}

const greeting = (name) => {
	alert(`Greetings, ${name}!`);
};

const debounceGreeting = debounce(greeting, 1000)

document.querySelector('button').addEventListener('click', () => {
	debounceGreeting('Manu')
})
