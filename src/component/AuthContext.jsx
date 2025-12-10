
//  useContext // without redux // 

// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
  
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [account, setAccount] = useState(() => {
//     const savedAccount = localStorage.getItem("account");
//     return savedAccount ? JSON.parse(savedAccount) : null;
//   });

  
//   const register = (email, password) => {
//     const newAccount = { email, password };
//     setAccount(newAccount);
//     localStorage.setItem("account", JSON.stringify(newAccount)); 
//   };

  
//   const login = (email, password) => {
//     if (!account) return false;

//     if (email === account.email && password === account.password) {
//       const loggedInUser = { email };
//       setUser(loggedInUser);
//       localStorage.setItem("user", JSON.stringify(loggedInUser)); 
//       return true;
//     }

//     return false;
//   };

 
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, account, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
