import Home from './routes/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/Layout/Layout.jsx';
import SinglePage from '../../frontend/src/routes/singlePage/SinglePage.jsx';
import ProfilePage from './routes/ProfilePage/ProfilePage.jsx';
import ListPage from './routes/ListPage/ListPage.jsx';
import Register from './routes/Register/Register.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App