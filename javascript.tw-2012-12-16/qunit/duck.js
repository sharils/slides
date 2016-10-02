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
