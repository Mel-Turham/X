import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from '@nextui-org/react';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdSaveAlt } from 'react-icons/md';

const CardPost = () => {
	return (
		<Card className='py-1' shadow='none'>
			<CardHeader className='pb-0 pt-1 px-4 flex-col items-start '>
				<div className='flex items-center gap-3'>
					<Avatar size='md' />
					<div className=''>
						<div className='flex items-center gap-3'>
							<h2 className='font-bold text-medium'>
								Devon lame
								<span className='opacity-40 ml-1 font-light'>@johndue</span>
							</h2>
							&bull;
							<span className='font-light italic'>2w</span>
						</div>
						<h3 className=' font-medium text-[15px]'>Tom is the big hurry</h3>
					</div>
				</div>
			</CardHeader>
			<CardBody className='overflow-visible mt-1'>
				<Image
					src='../../src/assets/images/posts/post_image-1.png'
					className='object-cover'
				/>
			</CardBody>
			<CardFooter className='px-4'>
				<div className='flex'>
        <Button
					variant='light'
					size='md'
					color='success'
					radius='full'
					startContent={<FaRegComment className='w-4 h-4' />}
					className='flex items-center text-gray-600'
				>
					<span className='text-gray-600 font-semibold'>5k</span>
				</Button>
				<Button
					variant='light'
					size='md'
					color='primary'
					radius='full'
					startContent={<AiOutlineRetweet className='w-4 h-4' />}
					className='flex items-center text-gray-600'
				>
					<span className='text-gray-600 font-semibold'>59</span>
				</Button>
				<Button
					variant='light'
					size='md'
					color='danger'
					radius='full'
					startContent={<IoIosHeartEmpty className='w-4 h-4' />}
					className='flex items-center text-gray-600'
				>
					<span className='text-gray-600 font-semibold'>10k</span>
				</Button>
				<Button
					variant='light'
					size='md'
					color='warning'
					radius='full'
					startContent={<MdSaveAlt className='w-4 h-4' />}
					className='flex items-center text-gray-600'
				>
					<span className='text-gray-600 font-semibold'>5</span>
				</Button>
        </div>
			</CardFooter>
      <p></p>
		</Card>
	);
};
export default CardPost;
