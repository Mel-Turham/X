import { NavLink } from 'react-router-dom';

const NavBarProfile = () => {
	return (
		<menu className='py-3'>
			<ul className=' flex items-center justify-around'>
				<NavLink
					to='/profile'
					end
					className={({ isActive }) =>
						isActive
							? 'text-blue-500 font-semibold border-b-3 border-blue-500'
							: 'text-default-500 font-semibold'
					}
				>
					Tweets
				</NavLink>
				<NavLink
					to='media'
					className={({ isActive }) =>
						isActive
							? 'text-blue-500 font-semibold border-b-3 border-blue-500'
							: 'text-default-500 font-semibold'
					}
				>
					Media
				</NavLink>
				<NavLink
					to='tweetsReplies'
					className={({ isActive }) =>
						isActive
							? 'text-blue-500 font-semibold border-b-3 border-blue-500'
							: 'text-default-500 font-semibold'
					}
				>
					Tweets & Replies
				</NavLink>
				<NavLink
					to='likes'
					className={({ isActive }) =>
						isActive
							? 'text-blue-500 font-semibold border-b-3 border-blue-500'
							: 'text-default-500 font-semibold'
					}
				>
					Likes
				</NavLink>
			</ul>
		</menu>
	);
};

export default NavBarProfile;
