import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';
import './index.scss';
import { Helmet } from 'react-helmet';
import theme from './theme/theme';
import Navigation from './components/navigation/navigation';

import config from './config.json';

const Homepage = loadable( () => import( /* webpackChunkName: "home" */ './pages/home' ) );
const AboutPage = loadable( () => import( /* webpackChunkName: "about" */ './pages/about' ) );
const Impressum = loadable( () => import( /* webpackChunkName: "impressum" */ './pages/impressum' ) );
const Datenschutz = loadable( () => import( /* webpackChunkName: "datenschutz" */ './pages/datenschutz' ) );

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
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/impressum" component={Impressum} />
					<Route exact path="/datenschutz" component={Datenschutz} />
				</Switch>
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
