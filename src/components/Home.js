import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Form from './Form';
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="container" style={{marginBlockEnd:"10px"}}>
      <div className="p-4 box mt-3 text-center">
        Welcome <br />
        {user && user.displayName}
      </div>
      <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>

      </div>
        
    </div>
      <Form userDisplayName={user && user.displayName} />
      </>
  );
};

export default Home;
