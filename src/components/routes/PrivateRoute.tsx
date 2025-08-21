import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function PrivateRoute({ children }) {
  const [auth, setAuth] = useState<boolean | null>(null); // null = loading, true = ok, false = not auth

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth(false);
      return;
    }

    // token verify 
    axios
      .get("http://localhost:5022/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>; // loading state
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
