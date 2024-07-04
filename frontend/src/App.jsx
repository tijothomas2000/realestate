import Home from './routes/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequireAuth, Layout } from './routes/Layout/Layout.jsx';
import SinglePage from '../../frontend/src/routes/singlePage/SinglePage.jsx';
import ProfilePage from './routes/ProfilePage/ProfilePage.jsx';
import ListPage from './routes/ListPage/ListPage.jsx';
import Register from './routes/Register/Register.jsx';
import Login from './routes/Login/Login.jsx';
import ProfileUpdatePage from './routes/ProfileUpdatePage/ProfileUpdatePage.jsx';

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
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App