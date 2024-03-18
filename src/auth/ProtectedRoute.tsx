import UserProfilePage from "@/components/UserProfilePage/UserProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <UserProfilePage/>;
  }

  return <Navigate to="/"  />;
};

export default ProtectedRoute;
