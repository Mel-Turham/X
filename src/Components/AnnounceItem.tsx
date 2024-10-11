import {
	Avatar,
	CardFooter,
	Card,
	CardHeader,
	CardBody,
} from '@nextui-org/react';
import ImageUrl from '../../src/assets/images/users/Thumbnail_1.png';

const AnnounceItem = () => {
	return (
		<>
			<div className='my-1.5 rounded'>
				<Card
					shadow='none'
					radius='none'
					className='flex py-2  gap-2 flex-row items-center bg-transparent'
				>
					<div>
						<CardHeader className='mb-0 py-0 px-0'>
							<h4 className='text-[14px] text-default-500 uppercase'>
								Covid 19 &bull;{' '}
								<span className='font-light capitalize'>Last night</span>
							</h4>
						</CardHeader>
						<CardBody className=' py-1 px-0'>
							<p className='line-clamp-3 text-[14px] font-semibold text-pretty'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Deleniti nisi expedita deserunt libero nemo repudiandae quis est
								voluptas adipisci placeat!
							</p>
						</CardBody>
						<CardFooter className=' py-0 px-0'>
							<span className='text-[10px] mr-1 font-semibold'>
								Trending with
							</span>
							<span className='text-[10px] text-blue-500 font-semibold'>
								#Trump
							</span>
						</CardFooter>
					</div>
					<div>
						<Avatar radius='sm' size='lg' src={ImageUrl} />
					</div>
				</Card>
			</div>
		</>
	);
};
export default AnnounceItem;
