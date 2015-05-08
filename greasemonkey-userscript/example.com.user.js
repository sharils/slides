// ==UserScript==
// @name        Example
// @namespace   http://example.com/
// @description A simple example of UserScript
// @match       http://example.com/
// @require     http://code.jquery.com/jquery-2.1.3.js
// @version     1.0.0
// @grant       none
// @noframes
// ==/UserScript==

if (top === window) {
	alert(typeof this.$)
}
