import { Route, Routes } from 'react-router-dom';
import LayoutHome from './Layouts/LayoutHome';
import {
	Feeds,
	BookMarks,
	Messages,
	Explore,
	Lists,
	More,
	Notifications,
	Likes,
	TweetsReplies,
	Media,
	Tweets,
} from './Pages/index';

import { Login, Register } from './Auth/index';
import LayoutProfile from './Layouts/LayoutProfile';
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutHome />}>
				<Route index element={<Feeds />} />
				<Route path='bookmarks' element={<BookMarks />} />
				<Route path='messages' element={<Messages />} />
				<Route path='explore' element={<Explore />} />
				<Route path='profile' element={<LayoutProfile />}>
					<Route index element={<Tweets />} />
					<Route path='likes' element={<Likes />} />
					<Route path='media' element={<Media />} />
					<Route path='tweetsReplies' element={<TweetsReplies />} />
				</Route>
				<Route path='lists' element={<Lists />} />
				<Route path='more' element={<More />} />
				<Route path='notifications' element={<Notifications />} />
			</Route>
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
		</Routes>
	);
};
export default App;
