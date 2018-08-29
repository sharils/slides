(function(definition)
{
	if (typeof define == "function")
	{
		define(
		[
			"../libraries/qunit/qunit/qunit",
			"../libraries/domo/lib/domo"
		], definition);
	}
})(function(QUnit, domo)
{
	HTML(
		HEAD(
			META({ charset: "utf-8" }),
			TITLE("QUnit RequireJS Domo"),
			LINK({ rel: "stylesheet", href: "../libraries/qunit/qunit/qunit.css" })
		),
		BODY(
			DIV({ id: "qunit" }),
			DIV({ id: "qunit-fixture" })
		)
	);

	// sanitize global namespace
	domo.global(false);

	// manual activate QUnit
	QUnit.load();
});
