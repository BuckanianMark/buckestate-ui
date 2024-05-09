import HomePage from "./routes/homePage/homePage"
import 
{createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout/layout';
import ListPage from "./routes/listPage/listPage";
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/SinglePage";


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
            path:"/list",
            element:<ListPage />
          },
          {
            path:"/:id",
            element:<SinglePage />
          },
          {
            path:"/login",
            element:<Login />
          }
        ]
      
    }
  ])
  
 

  return (

    <RouterProvider router={router} />

  )
}

export default App
