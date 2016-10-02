require(
[
	"cat",
	"duck"
], function(Cat, Duck)
{
	var cat,
		duck,
		tail,
		wing;

	cat = new Cat(9);
	tail = cat.getTail();

	duck = new Duck(4);
	wing = duck.getWing();

	document.getElementById("tail").innerHTML = tail;

	document.getElementById("wing").innerHTML = wing;
});
