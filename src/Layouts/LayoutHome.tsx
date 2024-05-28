import { Outlet } from 'react-router-dom';
import RightBar from '../Components/RightBar';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
const LayoutHome = () => {
	return (
		<div className='flex h-screen w-full overflow-hidden '>
			<SideBar />
			<section className='h-screen w-[50%] overflow-y-scroll no-scrollbar'>
				<Navbar />
				<Outlet />
			</section>
			<RightBar />
		</div>
	);
};
export default LayoutHome;
