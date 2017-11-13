"use strict";

class page {
	   
	open() {
		browser.reload();
		browser.url("https://posse.com/");
	};
}
module.exports = page;