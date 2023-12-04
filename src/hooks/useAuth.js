import AuthContext from "../context/AuthProvider";
import { useContext, useDebugValue } from "react";

// This custom hook serves as a wrapper for the AuthContext
// usage: const {auth,setAuth} = useAuth();
// ie. we can set the global auth state, and set
// the state from every component that is wrapped
// in the AuthProvider (provider of the context)
// see: https://react.dev/learn/passing-data-deeply-with-context

export default function useAuth() {
  // TESTING PURPOSE ->
  const { auth } = useContext(AuthContext);
  useDebugValue(auth ? auth : "no accesstoken");
  // <-
  return useContext(AuthContext);
}
