import { Button, Divider } from '@nextui-org/react';
import AnnounceItem from './AnnounceItem';

const AnnouncePost = () => {
	return (
		<div className='mb-3'>
			<div className='flex flex-col'>
				<h3 className='text-[1.2rem] font-bold sticky top-0  py-2'>
					What’s happening
				</h3>
				<Divider />
			</div>
			<AnnounceItem />
			<Divider />
			<AnnounceItem />
			<Divider />
			<AnnounceItem />
			<Button
				size='sm'
				variant='flat'
				color='primary'
				className='font-semibold'
			>
				Show more
			</Button>
		</div>
	);
};
export default AnnouncePost;
