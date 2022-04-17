const validateForm = (formState) => {
	const { firstName,lastName,username, password, confirm_password, accept_terms } = formState;
	const errors = {};
	if (!firstName) {
		errors.firstName = "firstName is required!";
	} 
	if (!lastName) {
		errors.lastName = "lastName is required!";
	}
	if(!username){
		errors.username = "username is required!";
	}
	if (!password) {
		errors.password = "Password is required";
	} else if (password.length < 4) {
		errors.password = "Password must be more than 4 characters";
	} else if (password.length > 10) {
		errors.password = "Password cannot exceed more than 10 characters";
	}
	if(!confirm_password){
		errors.confirm_password = "Passwords is required";
	}
	else if (password !== confirm_password) {
		errors.confirm_password = "Passwords did not match";
	}
	if (!accept_terms) {
		errors.accept_terms = "Please accept terms and conditions";
	}
	return errors;
};
export { validateForm };