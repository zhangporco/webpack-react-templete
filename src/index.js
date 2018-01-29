import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Import style
import './style/layout.css';

// Views
import Hello from './views/Hello';

ReactDOM.render((
	<Router>
		<Switch>
			<Route exact path="/hello" name="Hello Page" component={Hello}/>
			<Redirect from="/" to="/hello" />
		</Switch>
	</Router>
), document.getElementById('root'));
