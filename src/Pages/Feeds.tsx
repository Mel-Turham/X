import { Avatar, Button, Input, Tooltip } from '@nextui-org/react';

import { FaImage, FaPoll, FaSmile } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineGifBox } from 'react-icons/md';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { useValue } from '../Contexts/contextInput';
import CardPost from '../Components/CardPost';

const Feeds = () => {
	const { value, setValue } = useValue();

	return (
		<section className=''>
			<div className=''>
				<div className='flex flex-col gap-3'>
					<div className='p-5 flex items-center gap-2 border-t border-b '>
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
								<Button isIconOnly color='primary' variant='light'>
									<FaLocationDot className='w-5 h-5' />
								</Button>
							</Tooltip>
						</div>

						<div>
							<Button
								isDisabled={value ? false : true}
								color='primary'
								className='font-semibold'
							>
								Post
							</Button>
						</div>
					</div>
				</div>
				<article className='px-6  divide-y-1 flex flex-col gap-2'>
					{Array.from({ length: 200 }, (_, index) => {
						return <CardPost key={index} />;
					})}
				</article>
			</div>
		</section>
	);
};
export default Feeds;
