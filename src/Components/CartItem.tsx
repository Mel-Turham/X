import { Button, Card, CardHeader, Divider, User } from '@nextui-org/react';
import imageUrl from '../../src/assets/images/users/sbProfile_1.png';

const CartItem = () => {
	return (
		<>
			<Divider className='my-2' />
			<Card shadow='none' className='p-0 bg-indigo-50'>
				<CardHeader className='flex items-center justify-between'>
					<User
						className='font-semibold'
						name='Bessie Copper'
						description={'@alessand'}
						avatarProps={{
							src: imageUrl,
							isBordered: true,
							color: 'primary',
						}}
					/>
					<Button variant='solid' radius='full' size='sm' color='primary'>
						Follow
					</Button>
				</CardHeader>
			</Card>
		</>
	);
};
export default CartItem;
