import { Avatar, Button, Input, Tooltip } from '@nextui-org/react';
import { BsStars } from 'react-icons/bs';
import { FaImage, FaPoll, FaSmile } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineGifBox } from 'react-icons/md';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { useValue } from '../Contexts/contextInput';
const Feeds = () => {
	const { value, setValue } = useValue();
	return (
		<section className='h-full'>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center justify-between pb-3 px-5'>
					<h2 className='font-bold text-[1.4rem]'>Home</h2>
					<BsStars className='w-6 h-6 text-blue-600' />
				</div>
				<div className='py-5 px-5 flex items-center gap-2 border-t border-b '>
					<Avatar
						size='sm'
						color='primary'
						src='../../src/assets/svg/Logo.svg'
					/>
					<Input
						fullWidth={false}
						size='lg'
						placeholder='What is happening?!'
						variant='underlined'
						color='primary'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className='flex items-center justify-between px-5 border-b pb-3'>
					<div>
						<Tooltip content='Media' placement='bottom'>
							<Button isIconOnly color='primary' variant='light'>
								<FaImage className='w-5 h-5' />
							</Button>
						</Tooltip>
						<Tooltip content='Gif' placement='bottom'>
							<Button isIconOnly color='primary' variant='light'>
								<MdOutlineGifBox className='w-5 h-5' />
							</Button>
						</Tooltip>
						<Tooltip content='Poll' placement='bottom'>
							<Button isIconOnly color='primary' variant='light'>
								<FaPoll className='w-5 h-5' />
							</Button>
						</Tooltip>
						<Tooltip content='emoji' placement='bottom'>
							<Button isIconOnly color='primary' variant='light'>
								<FaSmile className='w-5 h-5' />
							</Button>
						</Tooltip>
						<Tooltip content='schedule' placement='bottom'>
							<Button isIconOnly color='primary' variant='light'>
								<RiCalendarScheduleFill className='w-5 h-5' />
							</Button>
						</Tooltip>
						<Tooltip content='localization' placement='bottom'>
							<Button
								isIconOnly
								color='primary'
								
								variant='light'
							>
								<FaLocationDot className='w-5 h-5' />
							</Button>
						</Tooltip>
					</div>

					<div>
						<Button isDisabled={value ? false : true} color='primary' className='font-semibold'>
							Post
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Feeds;
