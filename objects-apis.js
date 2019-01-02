/*
*Objects, Interfaces, APIs*
 */

let dog = {
	name: 'Steve',
	color: 'brown',
	breed: 'Pug',
	size: 'small',
	bark: function() {
		console.log("Bark!");
	},
};

dog.bark();

//API = Application Programming Interface

/*function x(y) {
	y = y + 5;
	console.log(y);
}
*/

/*let y = 5;
x(y);
console.log(y);
*/

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);

