

function divisibleByThree(number) {
	return number % 3 === 0;
}

function divisibleByFive(number) {
	return number % 5 === 0;
}

function fizzbuzz(number) {
	if (divisibleByFive(number) && divisibleByThree(number)) {
		return 'FizzBuzz';
	}
	if (divisibleByThree(number)) {
		return 'Fizz';
	}
	if (divisibleByFive(number)) {
		return 'Buzz';
	}
	return number;
}