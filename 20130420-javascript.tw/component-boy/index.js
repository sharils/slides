(function(global, undefined)
{
	'use strict';

	var appleCount,
		boy,
		boyInfo;

	appleCount = document.getElementById('apple-count');
	boy = new Boy();
	boyInfo = document.getElementById('boy-info');

	appleCount.onchange = onAppleCountChange;

	function onAppleCountChange()
	{
		// jshint validthis: true
		var apple,
			appleCount = this.value,
			appleIndex;

		appleCount = sanitiseAppleCount(appleCount);
		for (appleIndex = 0; appleIndex < appleCount; appleIndex++)
		{
			apple = new Apple();
			boy.takeApple(apple);
		}
		boyInfo.value = boy;
	}

	function sanitiseAppleCount(appleCount)
	{
		appleCount = +appleCount;
		if (typeof appleCount != 'number')
			appleCount = 0;
		if (appleCount !== appleCount)
			appleCount = 0;
		if ( Math.abs(appleCount) === Infinity )
			appleCount = 0;

		return appleCount;
	}
})(this);
