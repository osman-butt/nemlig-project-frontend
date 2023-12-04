import { createContext, useState } from "react";

const AuthContext = createContext({});

// All children wrapped in this component, gets access to the states defined below
function AuthProvider({ children }) {
  // This holds the access token
  const [auth, setAuth] = useState();
  // This holds the user and roles: {user: "test@mail.dk",roles:["cutomer"]}
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
