import Twitter from '../icons/Twitter';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHashtag, FaBookmark, FaListAlt, FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdMessage, MdMoreHoriz } from 'react-icons/md';
import { Avatar, Button, Tooltip } from '@nextui-org/react';
import { useState } from 'react';
// import Logo from '../../src/assets/svg/Logo.svg';
import ModalComponent from '../Components/Modal';
import { useDisclosure } from '@nextui-org/react';
import { FaFeatherPointed } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Links = [
	{
		path: '/',
		label: 'Home',
		icon: <AiFillHome className='w-5 h-5' />,
	},
	{
		path: 'explore',
		label: 'Explore',
		icon: <FaHashtag className='w-5 h-5' />,
	},
	{
		path: 'notifications',
		label: 'Notifications',
		icon: <IoMdNotifications className='w-5 h-5' />,
	},
	{
		path: 'messages',
		label: 'Messages',
		icon: <MdMessage className='w-5 h-5' />,
	},
	{
		path: 'bookmarks',
		label: 'Bookmarks',
		icon: <FaBookmark className='w-5 h-5' />,
	},
	{
		path: 'lists',
		label: 'Lists',
		icon: <FaListAlt className='w-5 h-5' />,
	},
	{
		path: 'profile',
		label: 'Profile',
		icon: <FaUser className='w-5 h-5' />,
	},
	{
		path: 'more',
		label: 'More',
		icon: <MdMoreHoriz className='w-5 h-5' />,
	},
];
const SideBar = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
	const { pathname } = useLocation();

	const handleMouseInter = (itemPath: string) => {
		setHoveredItem(itemPath);
	};
	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<>
			<aside className='pr-5 border-r  w-[15%]  flex flex-col items-end justify-between sticky  top-0 py-4'>
				<menu className='flex flex-col items-center gap-2'>
					<Twitter className='w-[40px] h-[40px]' />
					{Links.map((link) => {
						return (
							<li
								key={link.label}
								className='relative flex items-center justify-center '
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
										<Button
											color='primary'
											size='sm'
											className='absolute  font-semibold right-[51px] top-[50%] w-fit translate-y-[-50%] p-2 text-[12px] rounded-lg'
										>
											{link.label.length > 10
												? link.label.slice(0, 8) + '...'
												: link.label}
										</Button>
									)}
								</NavLink>
							</li>
						);
					})}
					<Tooltip placement='left' content='New post' color='primary'>
						<Button
							onPress={onOpen}
							color='primary'
							size='lg'
							variant='solid'
							radius='full'
							isIconOnly
							isDisabled={pathname === '/' ? false : true}
						>
							<FaFeatherPointed />
						</Button>
					</Tooltip>
				</menu>
				<Link to='/profile' className='mr-2'>
					<Avatar size='md' isBordered={true} color='primary' />
				</Link>
			</aside>
			<ModalComponent
				isOpen={isOpen}
				onClose={onClose}
				onOpenChange={onOpenChange}
			/>
		</>
	);
};
export default SideBar;
