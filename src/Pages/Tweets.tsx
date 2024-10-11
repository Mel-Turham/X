import { Divider } from '@nextui-org/react';
import CardPost from '../Components/CardPost';

const Tweets = () => {
	return (
		<section className='px-5 my-4'>
			{Array.from({ length: 10 }, (_, index) => (
				<div key={index}>
					<Divider className='my-5' />
					<CardPost />
				</div>
			))}
		</section>
	);
};
export default Tweets;
