import React from "react";

const Login = () => {
	return (
		<div className="tab-content mx-5">
			<form className="form-profile">
				<fieldset>
					<legend>Login</legend>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							className="form-control"
							id="email"
							placeholder="mail@mail.fr"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
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
