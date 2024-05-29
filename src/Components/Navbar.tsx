import { Button } from '@nextui-org/react';
import { BiArrowBack } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ navBackGround }: { navBackGround: boolean }) => {
	const { pathname } = useLocation();
	console.log(pathname);
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	const shouldShowBackArrow = location.pathname !== '/';
	return (
		<nav
			className={`w-full sticky top-0 left-0 z-50 py-2 px-6 ${
				navBackGround
					? ' backdrop-blur-md bg-white bg-opacity-30'
					: 'bg-transparent'
			}`}
		>
			<div className='flex items-center justify-between py-1 w-full '>
				<h2 className='font-bold text-[1.4rem] capitalize flex items-center gap-2'>
					{shouldShowBackArrow && (
						<button aria-label='back button' onClick={handleBackClick}>
							<BiArrowBack className='w-6 h-6' />
						</button>
					)}
					{pathname === '/' ? ' Home' : pathname.slice(1)}
				</h2>
				{pathname.slice(1) === 'profile' ? (
					<Button color='primary'>Follow</Button>
				) : (
					<BsStars className='w-6 h-6 text-blue-600' />
				)}
			</div>
		</nav>
	);
};
export default Navbar;
