/*
 Function that validates email address
*/
var validateEmail = function(email, error) {
	var matchResult = email.value.match('([a-z]|[0-9]|\.)+@([a-z]|[0-9]|\-)+\.com');
	if (matchResult == null) {
		error.innerHTML = 'invalid email address provided!';
	} else {
		error.innerHTML = '';
	}
}