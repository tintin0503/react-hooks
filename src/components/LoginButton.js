import React, { useContext } from "react";
import CurrentUserContext from "../user-context";
import Button from "./Button";

const LoginButton = (props) => {
  const {
    currentUser,
    setCurrentUser
  } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button onClick={() => {
      setCurrentUser({ name: 'Advika' })
    }}>Log in as Advika</Button>
  );
};

export default LoginButton;
