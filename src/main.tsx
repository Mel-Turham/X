import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ValueProvider } from './Contexts/contextInput.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ValueProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ValueProvider>
	</React.StrictMode>,
);
