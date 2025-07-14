import React from "react";
import Navbar from "./components/basic"; // ✅ Must match actual file
import Staticpage from "./components/Staticpage";
function Router() {
  return (
    <div>
        <Navbar />
        <staticpage />
      <h1>Welcome to React</h1>
    </div>
  );
}

export default Router;
