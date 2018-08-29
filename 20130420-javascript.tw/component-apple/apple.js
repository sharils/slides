(function(global, undefined)
{
	'use strict';

	global.Apple = Apple;

	function Apple(){}
	Apple.prototype.toString = function()
	{
		return 'This is an apple.';
	};
})(this);
