/*
*Conditionals, functions, scopes, and loops
 */

//Equals
let equals = 1 === 1;
//console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than or equal to
let greaterThanEq = 5 >= 5;

//Less than or equal to
let lessThanEq = 4 <= 9;

//Does not equal
let doesNotEq = 5!== 2;

/*
Examples
 */

let storeA = 4.40;
let storeB = 4.40;



function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.");
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.");
	} else {
		console.log("Their prices are equal.");
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

/*function squareNum(number) {
	return number * number;
}
*/

function squareNum(number){
	let squared = number * number;
	return squared;
}

let squareNumber = squareNum(7);
console.log(squareNumber);

//let x = 10;

function addNumbers(n, m, x) {
	console.log(x);
	let b;
	if(1===1){
		b = 8;
	}
	console.log(b);
	return n + m;
}

//addNumbers(2, 3, 8);
//console.log(x);

addNumbers(1, 2, 10);

//let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray[4][0]);
//let newArr = ourArray[4];
//console.log(newArr);

let ourArray = [1, 2, 3, 4, 5, 6, 7];

/*for (counter; comparison; increment){

}
*/
let arrLen = ourArray.length;
for (let i = 0; i < arrLen; i++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
	/*for(let j = 0; j < 10; j++){
		console.log('j is equal to: ' + j);
	}
	*/
}

let x = 0;
while(x < 10){
	console.log('Ran');
	x = x + 1;
}