import { Outlet } from 'react-router-dom';
import NavBarProfile from '../Components/NavBarProfile';
import { Profile } from '../Pages';

const LayoutProfile = () => {
	return (
		<>
			<Profile />
			<NavBarProfile />
			<Outlet />
		</>
	);
};

export default LayoutProfile;
