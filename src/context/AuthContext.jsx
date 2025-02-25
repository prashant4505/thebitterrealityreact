import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info
  const [permissions, setPermissions] = useState([]); // Store user permissions

  // Login function with API call
  const login = async (email, password) => {
    try {
      const response = await axios.post("https://api.thebitterreality.com/api/login", {
        email,
        password,
      });
      
      if (response.data && response.data.access_token) {
        setUser({ email, token: response.data.access_token, name: response.data.name, role: response.data.role});

        // Assign permissions based on user role (modify this based on your API response)
        setPermissions([response.data.role]);
        
        return {result: true};
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      return false; // Login failed
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setPermissions([]);
  };

  return (
    <AuthContext.Provider value={{ user, permissions, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
