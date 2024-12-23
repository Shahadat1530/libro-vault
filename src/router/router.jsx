import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Home from '../Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
])
export default router;