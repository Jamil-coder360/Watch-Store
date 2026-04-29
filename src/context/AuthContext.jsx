import { createContext, useState } from "react";

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (<AuthContext value={{ user }}>
    {children}
    </AuthContext>)
};

export { AuthContext };
export default AuthProvider;
