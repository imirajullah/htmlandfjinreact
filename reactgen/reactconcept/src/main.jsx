import React from "react";
//import Staticpage from "./components/Staticpage"; // ✅ Capital "S"
//import StaticB from "./components/StaticB"; // ✅ correct
import BusinessCard from "./components/BusinessCard";

function Router() {
  return (
    <div>
      {/* <StaticB />  {/* ✅ Proper usage with capital letter */}
      {/* <Staticpage /> ✅ Proper usage with capital letter */} 
      <BusinessCard /> {                                    }
    </div>
  );
}

export default Router;


