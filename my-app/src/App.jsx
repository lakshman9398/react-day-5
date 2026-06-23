import React, { createContext } from "react";
import Navbar from "./Navbar";

export const UserContext = createContext();

function App() {
  const user = "John";
  return (
    <UserContext.Provider value={user}>
      <Navbar />
    </UserContext.Provider>
  );
}

export default App;