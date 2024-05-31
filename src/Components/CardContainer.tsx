import { Button } from '@nextui-org/react';
import CartItem from './CartItem';
import AnnouncePost from './AnnouncePost';

const CardContainer = () => {
	return (
		<div className='h-[calc(100vh-60px)] overflow-y-scroll mt-3 mb-6 no-scrollbar'>
			<div className=''>
				<h3 className='text-[1.2rem] font-bold sticky top-0'>You might like</h3>
			</div>
			<>
				<CartItem />
				<CartItem />
				<div className='my-1'>
					<Button
						color='primary'
						className='font-semibold mt-3 w-fit'
						variant='flat'
						size='sm'
					>
						Show more
					</Button>
				</div>
				<AnnouncePost />
			</>
		</div>
	);
};
export default CardContainer;
