import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  return (
    <div><span style={{
      color:'white'
    }}>
                  Hola,{" "}
                  {!user
                    ? "Guest"
                    : !user.displayName
                    ? user.email
                    : user.displayName}
                </span></div>
  )
}

export default Home