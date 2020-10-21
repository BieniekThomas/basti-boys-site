import loadable from '@loadable/component';

const Home = loadable( () => import( /* webpackChunkName: "home" */ './pages/home' ) );
const About = loadable( () => import( /* webpackChunkName: "about" */ './pages/about' ) );
const Impressum = loadable( () => import( /* webpackChunkName: "impressum" */ './pages/impressum' ) );
const Datenschutz = loadable( () => import( /* webpackChunkName: "datenschutz" */ './pages/datenschutz' ) );

export default {
	name: 'Rauschen',
	navigation: [
		{
			path: '/',
			name: 'Intro',
			component: Home,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
		{
			path: '/impressum',
			name: 'Impressum',
			component: Impressum,
		},
		{
			path: '/datenschutz',
			name: 'Datenschutz',
			component: Datenschutz,
		},
	],
};
