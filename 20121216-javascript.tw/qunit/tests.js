(function(Cat, Duck)
{
	module("cat");

	test("constructor", 1, function()
	{
		var actual,
			cat;

		cat = new Cat(9);

		actual = cat.getTail();
		strictEqual(actual, 9, "nine tails!");
	});

	module("duck");

	test("constructor", 2, function()
	{
		var actual,
			duck;

		duck = new Duck(2);

		actual = duck.getWing();
		strictEqual(actual, 2, "two wings");

		duck.setWing(4);
		actual = duck.getWing();
		strictEqual(actual, 4, "two extra wings!");
	});
})(Cat, Duck);
