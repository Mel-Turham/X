import { Outlet } from 'react-router-dom';
import RightBar from '../Components/RightBar';
import SideBar from '../Components/SideBar';

const LayoutHome = () => {
	return (
		<main className='grid  grid-cols-12 dark   min-h-screen  px-[3rem] divide-x divide-gray-600'>
			<SideBar />
			<section className='px-4'>
				<Outlet />
			</section>
			<RightBar />
		</main>
	);
};
export default LayoutHome;
