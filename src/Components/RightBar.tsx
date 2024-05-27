import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	ScrollShadow,
} from '@nextui-org/react';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const RightBar = () => {
	const [isFollowed, setIsFollowed] = useState<boolean>(false);
	return (
		<aside className='col-start-9 col-end-13 h-screen py-3 px-4 sticky top-0 overflow-hidden'>
			<div className='pb-3'>
				<Input
					type='text'
					color='primary'
					placeholder='Search Twitter'
					className='font-semibold'
					startContent={
						<IoSearchOutline className='text-2xl  pointer-events-none flex-shrink-0 text-[#006fee]' />
					}
				/>
			</div>
			<Divider />
			<ScrollShadow className='h-[40vh]' hideScrollBar>
				<h2 className=' my-2 text-[1.5rem] font-semibold sticky top-0 z-40 bg-white'>
					You might like
				</h2>
				<div className='flex flex-col items-center'>
					<Card className='max-w-[330px] mb-4' shadow='sm'>
						<CardHeader className='justify-between'>
							<div className='flex gap-5'>
								<Avatar
									isBordered
									radius='full'
									size='md'
									src='https://nextui.org/avatars/avatar-1.png'
								/>
								<div className='flex flex-col gap-1 items-start justify-center'>
									<h3 className='text-small font-semibold leading-none text-default-600'>
										Zoey Lang
									</h3>
									<h4 className='text-small tracking-tight text-default-400'>
										@zoeylang
									</h4>
								</div>
							</div>
							<Button
								className={
									isFollowed
										? 'bg-transparent text-foreground border-default-200'
										: ''
								}
								color='primary'
								radius='full'
								size='sm'
								variant={isFollowed ? 'bordered' : 'solid'}
								onPress={() => setIsFollowed(!isFollowed)}
							>
								{isFollowed ? 'Unfollow' : 'Follow'}
							</Button>
						</CardHeader>
						<CardBody className='px-3 py-2 text-small text-default-600 no-scrollbar'>
							<p>
								Frontend developer and UI/UX enthusiast. Join me on this coding
								adventure!
							</p>
							<span className='pt-2'>
								#FrontendWithZoey
								<span className='py-2' aria-label='computer' role='img'>
									💻
								</span>
							</span>
						</CardBody>
						<CardFooter className='gap-3'>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>4</p>
								<p className=' text-default-400 text-small'>Following</p>
							</div>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>
									97.1K
								</p>
								<p className='text-default-400 text-small'>Followers</p>
							</div>
						</CardFooter>
					</Card>
					<Card className='max-w-[330px] mb-4' shadow='sm'>
						<CardHeader className='justify-between'>
							<div className='flex gap-5'>
								<Avatar
									isBordered
									radius='full'
									size='md'
									src='https://nextui.org/avatars/avatar-1.png'
								/>
								<div className='flex flex-col gap-1 items-start justify-center'>
									<h3 className='text-small font-semibold leading-none text-default-600'>
										Zoey Lang
									</h3>
									<h4 className='text-small tracking-tight text-default-400'>
										@zoeylang
									</h4>
								</div>
							</div>
							<Button
								className={
									isFollowed
										? 'bg-transparent text-foreground border-default-200'
										: ''
								}
								color='primary'
								radius='full'
								size='sm'
								variant={isFollowed ? 'bordered' : 'solid'}
								onPress={() => setIsFollowed(!isFollowed)}
							>
								{isFollowed ? 'Unfollow' : 'Follow'}
							</Button>
						</CardHeader>
						<CardBody className='px-3 py-2 text-small text-default-600 no-scrollbar'>
							<p>
								Frontend developer and UI/UX enthusiast. Join me on this coding
								adventure!
							</p>
							<span className='pt-2'>
								#FrontendWithZoey
								<span className='py-2' aria-label='computer' role='img'>
									💻
								</span>
							</span>
						</CardBody>
						<CardFooter className='gap-3'>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>4</p>
								<p className=' text-default-400 text-small'>Following</p>
							</div>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>
									97.1K
								</p>
								<p className='text-default-400 text-small'>Followers</p>
							</div>
						</CardFooter>
					</Card>
					<Card className='max-w-[330px] mb-4' shadow='sm'>
						<CardHeader className='justify-between'>
							<div className='flex gap-5'>
								<Avatar
									isBordered
									radius='full'
									size='md'
									src='https://nextui.org/avatars/avatar-1.png'
								/>
								<div className='flex flex-col gap-1 items-start justify-center'>
									<h3 className='text-small font-semibold leading-none text-default-600'>
										Zoey Lang
									</h3>
									<h4 className='text-small tracking-tight text-default-400'>
										@zoeylang
									</h4>
								</div>
							</div>
							<Button
								className={
									isFollowed
										? 'bg-transparent text-foreground border-default-200'
										: ''
								}
								color='primary'
								radius='full'
								size='sm'
								variant={isFollowed ? 'bordered' : 'solid'}
								onPress={() => setIsFollowed(!isFollowed)}
							>
								{isFollowed ? 'Unfollow' : 'Follow'}
							</Button>
						</CardHeader>
						<CardBody className='px-3 py-2 text-small text-default-600 no-scrollbar'>
							<p>
								Frontend developer and UI/UX enthusiast. Join me on this coding
								adventure!
							</p>
							<span className='pt-2'>
								#FrontendWithZoey
								<span className='py-2' aria-label='computer' role='img'>
									💻
								</span>
							</span>
						</CardBody>
						<CardFooter className='gap-3'>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>4</p>
								<p className=' text-default-400 text-small'>Following</p>
							</div>
							<div className='flex gap-1'>
								<p className='font-semibold text-default-400 text-small'>
									97.1K
								</p>
								<p className='text-default-400 text-small'>Followers</p>
							</div>
						</CardFooter>
					</Card>
				</div>
				<Button color='primary' size='sm' className='ml-2'>
					Show more{' '}
				</Button>
			</ScrollShadow>
			<Divider className='my-5' />
			<ScrollShadow className='h-[60vh] px-2' hideScrollBar>
				<h2 className=' my-2 text-[1.5rem] font-semibold sticky top-0 z-40 bg-white'>
					What’s happening
				</h2>
				<Card className='py-0 mb-2' shadow='sm' radius='sm'>
					<CardHeader>
						<p className='text-default-500'>
							Covid 19 &bull; <span>Last night</span>
						</p>
					</CardHeader>
					<CardBody className='flex flex-row justify-between -mt-5'>
						<p className='text-[13px] w-[75%] text-pretty line-clamp-3 font-extrabold'>
							COVID19 · Last night England’s Chief Medical Officer says the UK
							is at the most dangerous time of the pandemic #covid19
						</p>
						<Avatar size='lg' radius='sm' />
					</CardBody>
					<CardFooter className='-mt-5 text-[10px] text-default-400'>
						<span>Trending with</span>
						<span>@Trump</span>
					</CardFooter>
				</Card>
				<Card className='py-0 mb-2' shadow='sm' radius='sm'>
					<CardHeader>
						<p className='text-default-500'>
							Covid 19 &bull; <span>Last night</span>
						</p>
					</CardHeader>
					<CardBody className='flex flex-row justify-between -mt-5'>
						<p className='text-[13px] w-[75%] text-pretty line-clamp-3 font-extrabold'>
							COVID19 · Last night England’s Chief Medical Officer says the UK
							is at the most dangerous time of the pandemic #covid19
						</p>
						<Avatar size='lg' radius='sm' />
					</CardBody>
					<CardFooter className='-mt-5 text-[10px] text-default-400'>
						<span>Trending with</span>
						<span>@Trump</span>
					</CardFooter>
				</Card>
				<Card className='py-0 mb-2' shadow='sm' radius='sm'>
					<CardHeader>
						<p className='text-default-500'>
							Covid 19 &bull; <span>Last night</span>
						</p>
					</CardHeader>
					<CardBody className='flex flex-row justify-between -mt-5'>
						<p className='text-[13px] w-[75%] text-pretty line-clamp-3 font-extrabold'>
							COVID19 · Last night England’s Chief Medical Officer says the UK
							is at the most dangerous time of the pandemic #covid19
						</p>
						<Avatar size='lg' radius='sm' />
					</CardBody>
					<CardFooter className='-mt-5 text-[10px] text-default-400'>
						<span>Trending with</span>
						<span>@Trump</span>
					</CardFooter>
				</Card>
			</ScrollShadow>
		</aside>
	);
};
export default RightBar;
