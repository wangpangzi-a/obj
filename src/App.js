import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/zzy/Home.js'
import Login from "./pages/zzy/login"


class App extends React.Component {

	  render() {
		return (
			<div className="box-in">
				<BrowserRouter>
					{/* <Home/> */}
					<Route path="/Home" component={Home}/>
					<Route path="/" exact={true} component={Login}/>
				</BrowserRouter>
			</div>
		)
	  }

}


export default App;
