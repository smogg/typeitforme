/*
* TypeItForMe.js 
* https://github.com/smogg/typeitforme
*
* Copyright 2014 Oskar Zabik
* Released under MIT license
* https://github.com/smogg/typeitforme/blog/master/LICENSE
*/
String.prototype.typeItForMe = function(whereID, speed) {
	var _this = this;
	this.alreadyTyped = 0;

	speed = speed || 100; // typing speed in ms/letter
	var humanizedSpeed = humanize(speed); // will store random speed for huma touch
	var startTime = window.mozAnimationStartTime || Date.now();
	var where = document.getElementById(whereID);

	// will randomize given number
	// to humanize the typing experience
	function humanize(num) {
		var max = Math.floor(num + num/3);
		var min = Math.floor(num - num/3);
		num = Math.floor(Math.random() * max) + min;
		return num;
	}


	// Adds next letter to the "where" container
	function actuallyTypeIt() {
		var letter = _this[_this.alreadyTyped];
		var startStamp = Date.now();

		// calculate time difference
		var timeDiff = startStamp - startTime;


		// paint the letter, if time is right
		// and humanize speed a little
		if (timeDiff > humanizedSpeed) {
			var text = where.innerHTML + letter;
			where.innerHTML = text;
			_this.alreadyTyped++
			startTime = Date.now();
			humanizedSpeed = humanize(speed);
		};

		// stop if typed everything
		if (_this.alreadyTyped === _this.length) {
			return;
		};

		// recur
		requestAnimationFrame(actuallyTypeIt);
	}

	requestAnimationFrame(actuallyTypeIt);
}