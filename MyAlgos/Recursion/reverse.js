/**
 * Accepts a string and returns the string revers
 * Constraint: must be done via recursion
 */

function reverse(str) {
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// Test Cases
console.log(reverse('awesome') ); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'