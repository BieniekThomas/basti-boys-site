import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.scss';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

import theme from './theme/theme';
import Navigation from './components/navigation/navigation';
import Sidebar from './components/sidebar/sidebar';

import config from './config';
// import Frame from './components/frame/frame';


const App = () => {
	const location = useLocation();
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>
					{config.name}
					{location.pathname !== '/' ? ` - ${location.pathname.replace( '/', '' )}` : ''}
				</title>
			</Helmet>
			<ThemeProvider theme={theme}>
				<Navigation />
				{/* <Frame /> */}
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						{config.navigation.map( item => (
							<Route key={item.name} exact path={item.path} component={item.component} />
						) )}
					</Switch>
				</AnimatePresence>
				<Sidebar />
			</ThemeProvider>
		</>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById( 'app' ),
);
