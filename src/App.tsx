import { Route, Routes, useNavigate } from 'react-router-dom';
import LayoutHome from './Layouts/LayoutHome';
import { Feeds, BookMarks, Messages, Explore } from './Pages/index';
import { NextUIProvider } from '@nextui-org/react';
const App = () => {
	const navigate = useNavigate();
	return (
		<NextUIProvider navigate={navigate}>
			<Routes>
				<Route path='/' element={<LayoutHome />}>
					<Route index element={<Feeds />} />
					<Route path='bookmarks' element={<BookMarks />} />
					<Route path='messages' element={<Messages />} />
					<Route path='explore' element={<Explore />} />
				</Route>
			</Routes>
		</NextUIProvider>
	);
};
export default App;
