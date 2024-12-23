import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello!</div>
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
])
export default router;