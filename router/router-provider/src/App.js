import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
//Removes Routes, Link, NavLink

//pages
import Home from './pages/Home'
import About from './pages/About'

//Layouts
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements (
    //Routes replaced with Route
    //Route can be assigned path & elements to layout routes
    <Route  path='/' element={<RootLayout /> }>
      <Route index element={<Home /> }/>
      <Route path="about" element={<About /> }/>         
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
