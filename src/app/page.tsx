import Scene from '@/components/scene';
import Info from '@/components/info';
import Header from '@/components/header';

import './globals.css';

const Home: React.FC = () => (
	<>
		<Header />
		<div className='scene-container'>
			<Scene />
			<Info />
		</div>
	</>
);

export default Home;
