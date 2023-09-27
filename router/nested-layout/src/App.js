import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
//Removes Routes, Link, NavLink

//pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'

//Layouts
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/HelpLayout';

const router = createBrowserRouter([
  {
    //Routes replaced with Route
    //Route can be assigned path & elements to layout routes
    
    path:'/', 
    element: <HelpLayout />,
    children: [
      {
        path:"about",
        element:<About />,
      },
      {
      path:"home",
      element: <Home />,
    },

  ],
},
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
