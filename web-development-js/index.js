(function(global, undefined) {
	"use strict";

	var levelInput = $(".level-input"),
		levelMax = $(".level-max"),
		levelMin = $(".level-min");

	levelInput.change(function() {
		var level = $(".level"),
			levelValue = $(".value"),
			percent,
			value = this.value,
			valueMax = levelMax.val(),
			valueMin = levelMin.val();

		percent = (value - valueMin) / (valueMax - valueMin);
		percent = Math.round(percent * 100) / 100;
		percent *= 100;
		percent += "%";
		level.css("height", percent);
		levelValue.text(value);
	});
})(this);
