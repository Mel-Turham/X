import { Button } from '@nextui-org/react';
import { BiCalendar } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

const Profile = () => {
	return (
		<section>
			<div className=' w-full relative min-h-[35vh] mt-1  bg-gradient-to-l from-blue-500 to-indigo-300'>
				<figure className='overflow-hidden absolute h-[130px] w-[130px] -bottom-[50%] left-5 translate-y-[-40%] rounded-full bg-gradient-to-br from-blue-500 to-slate-300 shadow-md border-4 border-black/60 flex items-center justify-center'>
					<img
						alt='profile-user'
						className='m-5 w-full h-full object-cover'
						src='../../src/assets/images/users/profile_4.png'
					/>
				</figure>
			</div>
			<div className='px-5  w-full flex justify-between pt-4'>
				<div className='h-full mt-10 w-1/2'>
					<div className='ml-4 py-2'>
						<div className='flex flex-col justify-center -space-y-1'>
							<h2 className='font-bold text-[1.3rem]'>William</h2>
							<p className='text-default-500 my-1 font-semibold'>@william</p>
							<p>Product Designer</p>
						</div>
						<div className='flex items-center gap-2 text-sm font-light text-default-400'>
							<i className='flex items-center gap-1'>
								<FaLocationDot />
								<span>London</span>
							</i>
							<i className='flex items-center gap-1'>
								<BiCalendar />
								<span>Joined June 2024</span>
							</i>
						</div>
						<div className='mt-2 flex item-center gap-2'>
							<div className='flex items-center gap-1'>
								<b>569</b>
								<span>Following</span>
							</div>
							<div className='flex items-center gap-1'>
								<b>79</b>
								<span>Followers</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Button
						variant='ghost'
						size='sm'
						color='primary'
						radius='full'
						className='w-[120px] font-bold'
					>
						Follow
					</Button>
				</div>
			</div>
		</section>
	);
};
export default Profile;
