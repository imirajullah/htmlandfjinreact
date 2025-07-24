import React from "react";

function Timer() {
  console.log("Timer component loaded");
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  let greeting="";
  if (hour < 8) {
    greeting = "Good morning";
  } else if (hour < 14) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div>
      <h1>Greeting: {greeting}</h1>
      <p>Current Time: {hour}:{minute < 10 ? `0${minute}` : minute}</p>
    </div>
  );
}

export default Timer;
