import React from "react";
import UserProfile from "../components/UserProfile";
import { useAuth } from "./../contexts/AuthCtx";

function HomePage() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <UserProfile /> : <h2> Welcome Page</h2>}</>;
}

export default HomePage;
