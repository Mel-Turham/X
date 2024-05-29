import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	User,
} from '@nextui-org/react';
import { BsSearch } from 'react-icons/bs';

const RightBar = () => {
	return (
		<aside className='h-screen w-[26%] px-5 py-3 border-l'>
			<Input
				placeholder='Search Tweeter'
				size='md'
				color='primary'
				startContent={<BsSearch className=' mr-1 flex-shrink-0 ' />}
			/>
			<div className='h-[calc(100vh-65px)] overflow-y-scroll mt-3 py-1 no-scrollbar'>
				<div className=''>
					<h3 className='text-[1.2rem] font-bold sticky top-0  py-1'>
						You might like
					</h3>
					<Divider />
				</div>
				<div className='flex flex-col gap-2 border-b mb-2 py-2'>
					<Card shadow='none' className='p-0 bg-indigo-50'>
						<CardHeader className='flex items-center justify-between'>
							<User
								className='font-semibold'
								name='Bessie Copper'
								description={'@alessandroveronezi'}
								avatarProps={{
									src: '../../src/assets/images/users/sbProfile_1.png',
									isBordered: true,
									color: 'primary',
								}}
							/>
							<Button variant='solid' radius='full' size='sm' color='primary'>
								Follow
							</Button>
						</CardHeader>
					</Card>
					<Divider />
					<Card shadow='none' className='p-0 bg-indigo-50'>
						<CardHeader className='flex items-center justify-between'>
							<User
								className='font-semibold'
								name='Bessie Copper'
								description={'@alessandroveronezi'}
								avatarProps={{
									src: '../../src/assets/images/users/sbProfile_1.png',
									isBordered: true,
									color: 'primary',
								}}
							/>
							<Button variant='solid' radius='full' size='sm' color='primary'>
								Follow
							</Button>
						</CardHeader>
					</Card>
					<Divider />
					<Button
						color='primary'
						className='font-semibold mt-3 w-fit'
						variant='light'
						size='sm'
					>
						Show more
					</Button>
				</div>
				<div className='flex flex-col'>
					<h3 className='text-[1.2rem] font-bold sticky top-0  py-2'>
						What’s happening
					</h3>
					<Divider />
				</div>
				<div className='mt-1 rounded'>
					<Card
						shadow='none'
						radius='none'
						className='flex py-2  gap-2 flex-row items-center bg-transparent'
					>
						<div>
							<CardHeader className='mb-0 py-0 px-0'>
								<h4 className='font-bold text-default-500 uppercase'>
									Covid 19 &bull; <span className='font-light capitalize'>Last night</span>
								</h4>
							</CardHeader>
							<CardBody className=' py-1 px-0'>
								<p className='line-clamp-3 text-[14px] font-bold'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deleniti nisi expedita deserunt libero nemo repudiandae quis
									est voluptas adipisci placeat!
								</p>
							</CardBody>
							<CardFooter className=' py-0 px-0'>
								<span className='text-[12px] text-default-500 font-bold mr-1'>Trending with</span>
								<span className='text-[12px] text-blue-500 font-bold'>#Trump</span>
							</CardFooter>
						</div>
						<div>
							{' '}
							<Avatar radius='sm' size='lg' />
						</div>
					</Card>
				</div>
				<Divider/>
				<div className='mt-1 rounded'>
					<Card
						shadow='none'
						radius='none'
						className='flex py-2  gap-2 flex-row items-center bg-transparent'
					>
						<div>
							<CardHeader className='mb-0 py-0 px-0'>
								<h4 className='font-bold text-default-500 uppercase'>
									Covid 19 &bull; <span className='font-light capitalize'>Last night</span>
								</h4>
							</CardHeader>
							<CardBody className=' py-1 px-0'>
								<p className='line-clamp-3 text-[14px] font-bold'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deleniti nisi expedita deserunt libero nemo repudiandae quis
									est voluptas adipisci placeat!
								</p>
							</CardBody>
							<CardFooter className=' py-0 px-0'>
								<span className='text-[12px] text-default-500 font-bold mr-1'>Trending with</span>
								<span className='text-[12px] text-blue-500 font-bold'>#Trump</span>
							</CardFooter>
						</div>
						<div>
							{' '}
							<Avatar radius='sm' size='lg' />
						</div>
					</Card>
				</div>
				<div className='mt-1 rounded'>
					<Card
						shadow='none'
						radius='none'
						className='flex py-2  gap-2 flex-row items-center bg-transparent'
					>
						<div>
							<CardHeader className='mb-0 py-0 px-0'>
								<h4 className='font-bold text-default-500 uppercase'>
									Covid 19 &bull; <span className='font-light capitalize'>Last night</span>
								</h4>
							</CardHeader>
							<CardBody className=' py-1 px-0'>
								<p className='line-clamp-3 text-[14px] font-bold'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deleniti nisi expedita deserunt libero nemo repudiandae quis
									est voluptas adipisci placeat!
								</p>
							</CardBody>
							<CardFooter className=' py-0 px-0'>
								<span className='text-[12px] text-default-500 font-bold mr-1'>Trending with</span>
								<span className='text-[12px] text-blue-500 font-bold'>#Trump</span>
							</CardFooter>
						</div>
						<div>
							{' '}
							<Avatar radius='sm' size='lg' />
						</div>
					</Card>
				</div>
				<div className='mt-1 rounded'>
					<Card
						shadow='none'
						radius='none'
						className='flex py-2  gap-2 flex-row items-center bg-transparent'
					>
						<div>
							<CardHeader className='mb-0 py-0 px-0'>
								<h4 className='font-bold text-default-500 uppercase'>
									Covid 19 &bull; <span className='font-light capitalize'>Last night</span>
								</h4>
							</CardHeader>
							<CardBody className=' py-1 px-0'>
								<p className='line-clamp-3 text-[14px] font-bold'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deleniti nisi expedita deserunt libero nemo repudiandae quis
									est voluptas adipisci placeat!
								</p>
							</CardBody>
							<CardFooter className=' py-0 px-0'>
								<span className='text-[12px] text-default-500 font-bold mr-1'>Trending with</span>
								<span className='text-[12px] text-blue-500 font-bold'>#Trump</span>
							</CardFooter>
						</div>
						<div>
							{' '}
							<Avatar radius='sm' size='lg' />
						</div>
					</Card>
				</div>
				<Button size='sm' variant='light' color='primary' className='font-semibold'>Show more</Button>
			</div>
		</aside>
	);
};
export default RightBar;
