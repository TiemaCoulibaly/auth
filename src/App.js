import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/posts/Posts";
import Post from "./pages/posts/Post";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Account from "./pages/users/Account";
import Profil from "./pages/users/Profil";
import Auth from "./contexts/Auth";
import { hasAuthenticated } from "./services/AuthApi";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);
	return (
		<Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			<HashRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/posts" component={Posts} />
						<Route exact path="/post" component={Post} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<AuthenticatedRoute
							path="/account"
							component={Account}
						/>
						<AuthenticatedRoute path="/profil" component={Profil} />
					</Switch>
				</div>
			</HashRouter>
		</Auth.Provider>
	);
};

export default App;
