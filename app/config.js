import loadable from '@loadable/component';

const Home = loadable( () => import( /* webpackChunkName: "home" */ './pages/home' ) );
const About = loadable( () => import( /* webpackChunkName: "about" */ './pages/about' ) );
const Impressum = loadable( () => import( /* webpackChunkName: "impressum" */ './pages/impressum' ) );
const Datenschutz = loadable( () => import( /* webpackChunkName: "datenschutz" */ './pages/datenschutz' ) );

export default {
	name: 'okay',
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
	pictures: [
		{
			path: 'https://images.unsplash.com/photo-1500305614571-ae5b6592e65d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
			alt: '',
			width: 1355,
			height: 897,
		},
		{
			path: 'https://images.unsplash.com/photo-1581967698956-93b4c52313e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80',
			alt: '',
			width: 690,
			height: 937,
		},
		{
			path: 'https://images.unsplash.com/photo-1602136773736-34d445b989cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
			alt: '',
			width: 624,
			height: 937,
		},
		{
			path: 'https://images.unsplash.com/photo-1554215317-8ae4f84665f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
			alt: '',
			width: 624,
			height: 937,
		},
		{
			path: 'https://images.unsplash.com/photo-1587668170083-0a23db44f465?ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80',
			alt: '',
			width: 629,
			height: 937,
		},
		{
			path: 'https://images.unsplash.com/photo-1545224078-fc83d21f19e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
			alt: '',
			width: 1350,
			height: 900,
		},
	],
};
