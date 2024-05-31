import { Button } from '@nextui-org/react';

const Profile = () => {
	return (
		<section>
			<div className=' w-full relative min-h-[35vh] mt-1  bg-gradient-to-l from-blue-500 to-indigo-300'>
				<figure className='absolute h-[130px] w-[130px] -bottom-[50%] left-5 translate-y-[-40%] rounded-full bg-gradient-to-br from-blue-500 to-slate-300 shadow-md'></figure>
			</div>
			<div className='px-5 bg-slate-50 w-full min-h-[200px] flex justify-between pt-4'>
				<div>
					<h2>Infos of user </h2>
				</div>
				<div>
					<Button
						variant='ghost'
						size='sm'
						color='primary'
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
