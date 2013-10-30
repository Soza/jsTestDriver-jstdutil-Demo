/*
 Test cases for [validate.js]
*/
TestCase('ValidateTest', {
	// simple case
	"test this should pass": function() { 
		assertTrue(true); 
	},

	// valid email address test case
	"test valid email": function() {
		var email = {value: 'sabby@test.com'};
		var error = {innerHTML: ''};
		
		validateEmail(email, error);
		assertEquals('', error.innerHTML);
	},

	// invalid email address test case
	"test email without @": function() {
		var email = { value: 'sabby'};
		var error = { innerHTML: ''};

		validateEmail(email, error);
		assertEquals('invalid email address provided!', error.innerHTML);
	},
	
	// bad test case
	"test I'm bad": function() {
		
		// alert('This is a bad idea!');
		
		// The whole point is to not have any browser interaction.. no alerts! 
	},
  
});