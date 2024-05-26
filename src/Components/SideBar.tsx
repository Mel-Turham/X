import Twitter from '../icons/Twitter';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { FaHashtag, FaBookmark, FaListAlt, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdMessage, MdMoreHoriz } from 'react-icons/md';
import { HiPencilAlt } from 'react-icons/hi';
import { Button, User } from '@nextui-org/react';
import { useState } from 'react';
import Logo from '../../src/assets/svg/Logo.svg';
import { TfiMore } from 'react-icons/tfi';
const Links = [
	{
		path: '/',
		label: 'Home',
		icon: <AiFillHome className='w-6 h-6' />,
	},
	{
		path: 'explore',
		label: 'Explore',
		icon: <FaHashtag className='w-6 h-6' />,
	},
	{
		path: 'notifications',
		label: 'Notifications',
		icon: <IoMdNotifications className='w-6 h-6' />,
	},
	{
		path: 'messages',
		label: 'Messages',
		icon: <MdMessage className='w-6 h-6' />,
	},
	{
		path: 'bookmarks',
		label: 'Bookmarks',
		icon: <FaBookmark className='w-6 h-6' />,
	},
	{
		path: 'lists',
		label: 'Lists',
		icon: <FaListAlt className='w-6 h-6' />,
	},
	{
		path: 'profile',
		label: 'Profile',
		icon: <FaUser className='w-6 h-6' />,
	},
	{
		path: 'more',
		label: 'More',
		icon: <MdMoreHoriz className='w-6 h-6' />,
	},
];
const SideBar = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	const handleMouseInter = (itemPath: string) => {
		// console.log(itemPath);
		setHoveredItem(itemPath);
	};
	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<>
			<nav className='col-start-1 col-end-4 pt-4 mr-4 flex flex-col'>
				<Twitter className='w-[30px] h-[30px] self-center mb-6' />
				<ul className='flex flex-col items-center gap-3 mb-2'>
					{Links.map((link) => {
						return (
							<li
								key={link.label}
								className='flex   items-center justify-center  relative '
								onMouseEnter={() => handleMouseInter(link.path)}
								onMouseLeave={handleMouseLeave}
							>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										isActive
											? ' h-[40px] w-[40px]  bg-blue-400 grid place-content-center rounded-full transition-all ease-in-out'
											: ' h-[40px] w-[40px]  hover:bg-zinc-500 grid place-content-center rounded-full transition-all ease-in-out'
									}
								>
									<i>{link.icon}</i>
									{hoveredItem === link.path && (
										<span className='absolute font-semibold right-[52px] top-[50%] translate-y-[-50%] bg-slate-400 p-2 text-[12px] rounded-sm'>
											{link.label}
										</span>
									)}
								</NavLink>
							</li>
						);
					})}
					<Button
						color='primary'
						size='sm'
						variant='solid'
						endContent={<HiPencilAlt className='w-5 h-5' />}
						className='rounded-full w-fit mx-auto capitalize text-[14px] font-semibold'
					>
						new post
					</Button>
				</ul>

				<div className='flex items-center justify-between mt-11 max-h-fit py-2 px-3 rounded-md bg-[#28282d3f]'>
					<User
						name='William'
						description={<Link to='/profile'>@William</Link>}
						className='items-start'
						avatarProps={{
							src: Logo,
							isBordered: true,
							color: 'primary',
							size: 'sm',
						}}
					/>
					<TfiMore className='text-white w-6 h-6 cursor-pointer' />
				</div>
			</nav>
		</>
	);
};
export default SideBar;
