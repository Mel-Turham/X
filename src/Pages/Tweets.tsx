import { Divider } from '@nextui-org/react';
import CardPost from '../Components/CardPost';

const Tweets = () => {
	return (
		<section className='px-5 my-4'>
			{Array.from({ length: 40 }, (_, index) => (
				<>
					<Divider className='my-5' />
					<CardPost key={index} />
				</>
			))}
		</section>
	);
};
export default Tweets;
