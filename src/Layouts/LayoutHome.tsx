import { Outlet } from 'react-router-dom';
import RightBar from '../Components/RightBar';
import SideBar from '../Components/SideBar';


const LayoutHome = () => {
	return (
		<main className='grid grid-cols-12 min-h-screen  px-[5rem] divide-x divide-gray-300'>
			<SideBar />
			<section className='w-full col-start-2 col-end-9 pt-3 h-full overflow-y-scroll relative no-scrollbar'>
				
				<Outlet />
			</section>
			<RightBar />
		</main>
	);
};
export default LayoutHome;
