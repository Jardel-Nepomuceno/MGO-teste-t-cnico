import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";



const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    
    <C.Container>
        <h1>Página em desenvolvimento!!</h1>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      
    </C.Container>
  );
};

export default Home;