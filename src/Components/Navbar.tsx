import { BiArrowBack } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	const shouldShowBackArrow = location.pathname !== '/';
	return (
		<nav className='bg-white w-full sticky top-0 left-0 z-50 py-2 px-6'>
			<div className='flex items-center justify-between py-1 w-full bg-white'>
				<h2 className='font-bold text-[1.4rem] capitalize flex items-center gap-2'>
					{shouldShowBackArrow && (
						<button aria-label='back button' onClick={handleBackClick}>
							<BiArrowBack  className='w-6 h-6'/>
						</button>
					)}
					{pathname === '/' ? ' Home' : pathname.slice(1)}
				</h2>
				<BsStars className='w-6 h-6 text-blue-600' />
			</div>
		</nav>
	);
};
export default Navbar;
