import { Outlet } from 'react-router-dom';
import RightBar from '../Components/RightBar';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import { useEffect, useRef, useState } from 'react';

const LayoutHome = () => {
	const [navBackGround, setNavBackGround] = useState<boolean>(false);
	const middleSectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (middleSectionRef.current && middleSectionRef.current?.scrollTop > 0) {
				setNavBackGround(true);
			} else {
				setNavBackGround(false);
			}
		};

		const middleElement = middleSectionRef.current;

		if (middleElement) {
			middleElement.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (middleElement) {
				middleElement.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);
	return (
		<div className='flex h-screen w-full overflow-hidden'>
			<SideBar />
			<section
				ref={middleSectionRef}
				className='h-screen w-[55%] overflow-y-scroll no-scrollbar'
			>
				<Navbar navBackGround={navBackGround} />
				<Outlet />
			</section>
			<RightBar />
		</div>
	);
};
export default LayoutHome;
