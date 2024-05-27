import Twitter from '../icons/Twitter';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { FaHashtag, FaBookmark, FaListAlt, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdMessage, MdMoreHoriz } from 'react-icons/md';
import { Button, Tooltip, User } from '@nextui-org/react';
import { useState } from 'react';
import Logo from '../../src/assets/svg/Logo.svg';

import ModalComponent from '../Components/Modal';
import { useDisclosure } from '@nextui-org/react';
import { FaFeatherPointed } from 'react-icons/fa6';
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
	const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();

	const handleMouseInter = (itemPath: string) => {
		// console.log(itemPath);
		setHoveredItem(itemPath);
	};
	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<>
			<nav className='col-start-1 col-end-3 pt-4 mr-4 flex flex-col'>
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
											? ' h-[40px] w-[40px] bg-[#CCE2FC] hover:!bg-transparent  grid place-content-center  rounded-lg'
											: ' h-[40px] w-[40px]  grid place-content-center rounded-md transition-all ease-in-out'
									}
								>
									<Button isIconOnly color='primary' variant='light'>
										{link.icon}
									</Button>
									{hoveredItem === link.path && (
										<Button color='primary' size='sm' className='absolute  font-semibold right-[52px] top-[50%] translate-y-[-50%] p-2 text-[12px] rounded-lg'>
											{link.label}
										</Button>
									)}
								</NavLink>
							</li>
						);
					})}
					<Tooltip placement='left' content='New post'>
						<Button
							onPress={onOpen}
							color='primary'
							size='lg'
							variant='solid'
							radius='full'
							isIconOnly
						>
							<FaFeatherPointed />
						</Button>
					</Tooltip>
				</ul>

				<div className='flex items-center justify-center mt-6 max-h-fit py-2 px-3 rounded-md'>
					<User
						name='William'
						description={<Link to='/profile'>@William</Link>}
						className='items-start'
						avatarProps={{
							src: Logo,
							color: 'primary',
							size: 'sm',
						}}
					/>
				</div>
			</nav>
			<ModalComponent
				isOpen={isOpen}
				onClose={onClose}
				onOpenChange={onOpenChange}
			/>
		</>
	);
};
export default SideBar;
