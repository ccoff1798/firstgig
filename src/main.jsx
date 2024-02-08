import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Rental from './pages/Rental';
import NotFound from './pages/NotFound';
import Map from './pages/Map';
import Rules from './pages/Rules';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <AboutUs />
      }, {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Rentals',
        element: <Rental />
      },
      {
        path:'/Map',
        element: <Map />
      },
      {
        path:'/Rules',
        element: <Rules/>
      }

      //   path: '/matchup/:id',
      //   element: <Vote />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

