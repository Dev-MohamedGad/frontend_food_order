import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",index:true,
        element:<h1>Home Page</h1>,
      }, {
        path: "/user-profile",
        element:<h1>user_profile</h1>,
      },
      {
        path: "*",
        element:<h1>NOTFOUNND</h1>,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    )
}
