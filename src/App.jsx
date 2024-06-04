import HomePage from "./routes/homePage/homePage"
import 
{createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  {Layout, RequireAuth } from './routes/layout/layout';
import ListPage from "./routes/listPage/listPage";
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
        <Layout />,
        children:[
          {
            path:"/",
            element:<HomePage />
          },
          {
            path:"/login",
            element:<Login />
          },
          {
            path:"/register",
            element:<Register />
          }
        ]  
    },
    {
      path:"/",
      element:<RequireAuth />,
      children:[
        {
          path:"/profile",
          element:<ProfilePage />,
          loader:profilePageLoader
        },
        {
          path:"/list",
          element:<ListPage />,
          loader:listPageLoader
        },
        {
          path:"/rental/:id",
          element:<SinglePage />,
          loader:singlePageLoader
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage />
        },
        {
          path:"/add",
          element:<NewPostPage />
        }
      ]
    }
  ])
  
 

  return (

    <RouterProvider router={router} />

  )
}

export default App
