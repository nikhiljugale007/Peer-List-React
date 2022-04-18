import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const RequireAuth = ({ children, from }) => {
  const { authState } = useAuthContext();
  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/home" replace state={{ from: from }} />
  );
};
export { RequireAuth };
