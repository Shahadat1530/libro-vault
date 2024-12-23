import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
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