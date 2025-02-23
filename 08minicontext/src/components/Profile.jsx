import React, { useContext } from "react";
import UserContext from "../context/UserContext.";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <h2>Profile</h2>
      Welcome {user.username}
    </div>
  );
}

export default Profile;
