

describe("Fizzbuzz", function() {

	it("knows when a number is divisible by 3", function() {
		expect(divisibleByThree(3)).toBeTruthy();
	});

	it("knows when a number is divisible by 5", function() {
		expect(divisibleByFive(5)).toBeTruthy();
	});

	it("knows when a number is divisible by 15", function() {
		expect(divisibleByThree(15) && divisibleByFive(15)).toBeTruthy();
	});

	it("says Fizz when the number is divisible by three", function() {
		expect(fizzbuzz(3)).toEqual('Fizz');
	});

	it("says Buzz when the number is divisible by five", function() {
		expect(fizzbuzz(5)).toEqual('Buzz');
	});

	it("says FizzBuzz when the number is divisible by fifteen", function() {
		expect(fizzbuzz(15)).toEqual('FizzBuzz');
	});

	it("says the number in any other case", function() {
		expect(fizzbuzz(7)).toEqual(7);
	});
});