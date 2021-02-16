import React, { useState, useEffect, useContext } from "react";
import Auth from "../../contexts/Auth";

const Login = ({ history }) => {
	const { isAuthenticated } = useContext(Auth);
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;

		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.group();
		console.log(user);
		console.groupEnd();
	};
	//if the user is authenticated it will redirect to the account page
	useEffect(() => {
		if (isAuthenticated) {
			history.replace("/account");
		}
	}, [history, isAuthenticated]);
	return (
		<div className="tab-content mx-5">
			<form className="form-profile" onSubmit={handleSubmit}>
				<fieldset>
					<legend>Login</legend>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							name="username"
							type="text"
							className="form-control"
							id="email"
							placeholder="mail@mail.fr"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-outline-primary">
						Login
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Login;
