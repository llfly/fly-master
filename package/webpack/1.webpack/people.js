"use strict"
class Greeting {

	constructor(name) {
		this.name = name || 'llfly';
	}

	hello() {

		let str = 'hello';

		alert(`${this.name} say ${str} to you`);
	}

}

let Guest = new Greeting();

Guest.hello();