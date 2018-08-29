(function(global, undefined)
{
	'use strict';

	global.Boy = Boy;

	function Boy()
	{
		this.apples = [];
	}
	Boy.prototype.takeApple = function(something)
	{
		if ( !(something instanceof Apple) )
			return;
		this.apples.push(something);
	};
	Boy.prototype.toString = function()
	{
		var appleLength = this.apples.length;

		switch (appleLength)
		{
			case 0:
				return 'I am a boy with no apple.';
			case 1:
				return 'I am a boy with 1 apple.';
			default:
				return 'I am a boy with ' + appleLength + ' apples.';
		}
	};
})(this);
