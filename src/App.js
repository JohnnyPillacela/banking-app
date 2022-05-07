import React from 'react';
// import axios from "axios";
import { Container} from 'react-bootstrap';


import NavBar from './components/NavBar';
import ListAccounts from './components/ListAccounts';
import './styles/App.css'

function App() {
  return (
    <Container className='app'>
      <NavBar />
      <Container>
      <h1>
        Welcome, Bank Manager
      </h1>
      <ListAccounts />
      </Container>
    
    </Container>
  );
}

export default App;
