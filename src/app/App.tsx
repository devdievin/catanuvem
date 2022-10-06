import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import Header from '../components/header';
import './App.css';

const App = (props: any) => {
  return (
    <Router>
      <Header logo="CATANUVEM" />
      <Routes />
    </Router>
  );
}

export default App;
