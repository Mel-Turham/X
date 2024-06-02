import { Button } from '@nextui-org/react';
import { BiArrowBack } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ navBackGround }: { navBackGround: boolean }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	const shouldShowBackArrow = location.pathname !== '/';
	return (
		<nav
			className={`w-full sticky top-0 left-0 z-50 py-2 px-6 ${
				navBackGround
					? ' backdrop-blur-lg bg-white bg-opacity-10'
					: 'bg-transparent'
			}`}
		>
			<div className='flex items-center justify-between py-1 w-full '>
				<h2 className='font-bold text-[1.2rem] capitalize flex items-center gap-2'>
					{shouldShowBackArrow && (
						<button
							aria-label='back button'
							className='text-blue-400'
							onClick={handleBackClick}
						>
							<BiArrowBack className='w-5 h-5' />
						</button>
					)}
					{pathname === '/' ? ' Home' : pathname.slice(1)}
				</h2>
				{pathname.slice(1) === 'profile' ? (
					<Button color='primary' size='sm'>
						Follow
					</Button>
				) : (
					<BsStars className='w-5 h-5 text-blue-600' />
				)}
			</div>
		</nav>
	);
};
export default Navbar;
