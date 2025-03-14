import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Home from '../Home/Home';
import AddBooks from '../pages/AddBooks';
import AllBooks from '../pages/AllBooks';
import PrivateRoute from './PrivateRoute';
import UpdateBook from '../pages/UpdateBook';
import BooksByCategory from '../pages/BooksByCategory';
import BookDetails from '../pages/BookDetails';
import BorrowedBooks from '../pages/BorrowedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-books',
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        loader: () => fetch('https://librovault-server.vercel.app/books')
      },
      {
        path: '/add-books',
        element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path: '/borrowed-books',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: '/categories/:category',
        element: <PrivateRoute><BooksByCategory></BooksByCategory></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
        loader: ({params}) => fetch(`https://librovault-server.vercel.app/books/${params.id}`)
      },
      {
        path: '/books/:id',
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://librovault-server.vercel.app/books/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])
export default router;