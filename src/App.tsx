import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Routes
import { publicRoutes } from './routes/';

const App = () => {
	const routers = createBrowserRouter(publicRoutes);

	return (
		<>
			<RouterProvider router={routers} />
		</>
	);
};

export default App;
