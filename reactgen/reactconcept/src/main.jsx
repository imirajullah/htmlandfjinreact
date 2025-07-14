import React from "react";
import Staticpage from "./components/Staticpage"; // ✅ Capital "S"

import StaticB from "./components/StaticB"; // ✅ correct

function Router() {
  return (
    <div>
      <StaticB />  {/* ✅ Proper usage with capital letter */}
      <Staticpage /> {/* ✅ Proper usage with capital letter */}
    </div>
  );
}

export default Router;


