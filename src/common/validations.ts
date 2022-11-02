export const usernameValidation = (username: string) => {
	let error = '';
	if (!username) {
		error = 'Username is required!';
	} else if (username.length < 6) {
		error = 'Username must contain at least 6 characters!';
	} else if (!/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/.test(username)) {
		error = 'Username can only contain alphanumerics!';
	}
	return error;
};

export const emailValidation = (email: string) => {
	let error = '';
	if (!email) {
		error = 'Email address is required!';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		error = 'Email address is invalid!';
	}
	return error;
};

export const passwordValidation = (pass: string) => {
	let error = '';
	if (!pass) {
		error = 'Password is required!';
	} else if (pass.length < 8) {
		error = 'Password must be 8 or more characters!';
	} else if (!/\d/.test(pass)) {
		error = 'Password must contain at least 1 number!';
	} else if (!/[!@#$%&?]/g.test(pass)) {
		error = 'Password must contain at least 1 special character!';
	} else if (!/[A-Z]/g.test(pass)) {
		error = 'Password must contain at least 1 capital letter!';
	}
	return error;
};

export const confirmPasswordValidation = (pass1: string, pass2: string) => {
	let error = '';
	if (pass1 !== pass2) error = 'Password Did not match!!!';
	return error;
};

export const isRequired = (user: string) => {
	let error = '';
	if (!user) error = 'This Field is required!';
	return error;
};
