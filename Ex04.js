function filterPositiveNumbers(arr) {
	let array = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			array.push(arr[i]);
		}
	}
	return array;
}

console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []
