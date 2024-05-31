import { Input } from '@nextui-org/react';
import { BsSearch } from 'react-icons/bs';
import CardContainer from './CardContainer';
const RightBar = () => {
	return (
		<aside className='h-screen w-[26%] px-5 py-3 border-l'>
			<Input
				placeholder='Search Tweeter'
				size='md'
				color='primary'
				startContent={<BsSearch className=' mr-1 flex-shrink-0 ' />}
			/>
			<CardContainer />
		</aside>
	);
};
export default RightBar;
