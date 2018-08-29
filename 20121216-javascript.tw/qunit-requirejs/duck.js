(function(definition)
{
	if (typeof define == "function")
		define(definition);
})(function()
{
	function Duck(wing)
	{
		this.setWing(wing);
	}
	Duck.prototype.getWing = function(wing)
	{
		return this.wing;
	};
	Duck.prototype.setWing = function(wing)
	{
		this.wing = wing;
	};

	return Duck;
});
