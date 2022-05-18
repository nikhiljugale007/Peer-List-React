import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = ({ children, from }) => {
  const { isLoggedIn } = useSelector((store) => store.authSlice);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/home" replace state={{ from: from }} />
  );
};
export { RequireAuth };
