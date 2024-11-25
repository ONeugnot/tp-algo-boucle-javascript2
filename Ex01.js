function findMax(arr) {
	let result = arr[0];
	for (let i = 0; i < arr.length; i++) {
        if(result < arr[i]){
            result = arr[i]
        }
        }
        return result;
	}
	


// Exemples de test :
console.log(findMax([1, 3, 7, 2])); // Résultat attendu : 7
console.log(findMax([-5, -1, -10])); // Résultat attendu : -1
