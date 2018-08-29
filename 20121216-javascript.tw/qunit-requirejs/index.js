requirejs.config(
{
	// Because QUnit doesn't conform to AMD interface, we have to shim it.
	// 
	// This tells RequireJS that this module exports a QUnit variable to the
	// global namespace. And the module is located in "../libraries/qunit.js".
	shim:
	{
		"../libraries/qunit/qunit/qunit":
		{
			exports: 'QUnit'
		}
	},

	// bust cache
	urlArgs: Date.now()
});

require(
[
	"cat",
	"duck",
	"../libraries/qunit/qunit/qunit"
], function(Cat, Duck, QUnit)
{
	//*/ See note.yaml
	QUnit.load();
	//*/

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
});
