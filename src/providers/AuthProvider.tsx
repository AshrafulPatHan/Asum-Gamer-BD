import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
  photoURL?: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // প্রথমে cookie থেকে ইউজার restore করো
  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // user change হলে cookie তে save করো
  useEffect(() => {
    if (user) {
      Cookies.set("user", JSON.stringify(user), { expires: 14 });
    } else {
      Cookies.remove("user");
    }
  }, [user]);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
