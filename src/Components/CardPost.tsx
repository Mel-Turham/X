import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Tooltip,
} from '@nextui-org/react';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdSaveAlt } from 'react-icons/md';

const CardPost = () => {
	return (
		<div className='flex gap-2'>
			<div>
				<Avatar className='mt-4' size='md' />
			</div>
			<Card shadow='none' radius='none'>
				<CardHeader className='flex gap-1 flex-col items-start'>
					<div className='flex items-center gap-1'>
						<h3 className='text-[1rem] font-semibold'>
							William
							<span className='font-normal text-default-400'> @william</span>
						</h3>
						&bull; <span className='text-default-400'>2s</span>
					</div>
					<p className='text-[13px] line-clamp-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
						reprehenderit commodi quaerat consectetur labore deleniti deserunt
						molestias animi magnam ullam consequuntur hic, similique maxime
						odit! Deserunt illo optio provident.
					</p>
				</CardHeader>
				<CardBody className=' -mt-1'>
					<Image className='object-cover w-full' src='../../src/assets/images/posts/post_image-1.png' />
				</CardBody>
				<CardFooter className='py-0 w-[400px] justify-between'>
					<div className='flex flex-col items-center'>
						<Tooltip
							content='Comments'
							color='primary'
							size='sm'
							placement='top-end'
						>
							<Button
								onClick={() => alert('Clicked')}
								size='sm'
								isIconOnly={true}
								radius='full'
								color='primary'
								variant='light'
							>
								<FaRegComment className='w-5 h-5' />
							</Button>
						</Tooltip>
						<span className='text-[13.5px] font-semibold text-default-500'>
							20k
						</span>
					</div>
					<div className='flex flex-col items-center'>
						<Tooltip
							content='Retweets'
							color='success'
							size='sm'
							placement='top'
						>
							<Button
								onClick={() => alert('Clicked')}
								size='sm'
								isIconOnly={true}
								radius='full'
								color='success'
								variant='light'
							>
								<AiOutlineRetweet className='w-5 h-5' />
							</Button>
						</Tooltip>
						<span className='text-[13.5px] font-semibold text-default-500'>
							300
						</span>
					</div>
					<div className='flex flex-col items-center'>
						<Tooltip content='Likes' color='danger' size='sm' placement='top'>
							<Button
								onClick={() => alert('Clicked')}
								size='sm'
								isIconOnly={true}
								radius='full'
								color='danger'
								variant='light'
							>
								<IoIosHeartEmpty className='w-5 h-5' />
							</Button>
						</Tooltip>
						<span className='text-[13.5px] font-semibold text-default-500'>
							60.6k
						</span>
					</div>
					<div className='flex flex-col items-center'>
						<Tooltip content='Saves' color='warning' size='sm' placement='top'>
							<Button
								onClick={() => alert('Clicked')}
								size='sm'
								isIconOnly={true}
								radius='full'
								color='warning'
								variant='light'
							>
								<MdSaveAlt className='w-5 h-5' />
							</Button>
						</Tooltip>
						<span className='text-[13.5px] font-semibold text-default-500'>
							2.4k
						</span>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};
export default CardPost;
