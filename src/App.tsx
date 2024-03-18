import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AuthCallbackPage from "./components/AuthCallbackPage/AuthCallbackPage";
import ProtectedRoute from "./auth/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",index:true,
        element:<HomePage/>,
      }, {
        path: "/user-profile",
        element:<ProtectedRoute/>,
      }, {
        path: "/auth-callback",
        element:<AuthCallbackPage/>,
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
