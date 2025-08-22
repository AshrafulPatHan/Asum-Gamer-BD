import { Navigate } from "react-router";
import { useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import Cookies from "js-cookie";


interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }:PrivateRouteProps) {
  const [auth, setAuth] = useState<boolean | null>(null); // null = loading, true = ok, false = not auth

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");
    if (!token) {
      setAuth(false);
      return;
    }

    // token verify 
    axios
      .get("https://chill-gamer-server-jzl0.onrender.com/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>; // loading state
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
