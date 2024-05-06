import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './elements/header';

export const App: React.FC = () => {
  return (
    <Router>
      <>
      <Header/>
        hello
      </>
    </Router>
  );
}