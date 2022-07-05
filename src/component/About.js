import React, { useState, useEffect } from "react";

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("useEffect Ran");
  
    console.log(isLoggedIn);
  }, [isLoggedIn]); 
  return (
    <div>
      {console.log("Component Re-Rendered")};
      {isLoggedIn ? <h1>You are logged in</h1> : <h1>You are not logged In</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Update</button>
    </div>
  );
};

export default About;