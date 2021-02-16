import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../contexts/Auth";

const Navbar = () => {
	const { isAuthenticated } = useContext(Auth);

	const handleLogOut = () => {
		console.log("====================================");
		console.log("je suis logout!!");
		console.log("====================================");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Blog
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link active" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/posts">
								posts
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						{(!isAuthenticated && (
							<>
								<li className="nav-item">
									<NavLink className="nav-link" to="/login">
										LogIn
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/register">
										Register
									</NavLink>
								</li>
							</>
						)) || (
							<>
								<li className="nav-item">
									<NavLink className="nav-link" to="/account">
										My Account
									</NavLink>
								</li>
								<li className="nav-item">
									<button
										onClick={handleLogOut}
										className="btn btn-danger">
										LogOut
									</button>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
