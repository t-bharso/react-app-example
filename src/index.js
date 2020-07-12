import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./api/serviceWorker";
//import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import App from "./components/app";
//import Counters from './components/counters';
import Multiselect from "./components/multiselect";
import Form from "./components/form";

const routing = (
	<Router basename='/app'>
		<div>
			<nav className='navbar navbar-light bg-light'>
				<a className='nav-link' href={`${process.env.PUBLIC_URL}/`}>
					Home <span className='sr-only'>(current)</span>
				</a>
				<a className='nav-link' href={`${process.env.PUBLIC_URL}/multiselect`}>
					Multiselect
				</a>
				<a className='nav-link' href={`${process.env.PUBLIC_URL}/personal`}>
					PeronalInformation
				</a>
			</nav>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/multiselect' component={Multiselect} />
				<Route path='/personal' component={Form} />
			</Switch>
		</div>
	</Router>
);
console.log(process.env.PUBLIC_URL);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
