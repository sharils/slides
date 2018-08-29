(function(definition)
{
	if (typeof define == "function")
		define(definition);
})(function()
{
	function Cat(tail)
	{
		this.tail = tail;
	}
	Cat.prototype.getTail = function()
	{
		return this.tail;
	};

	return Cat;
});
