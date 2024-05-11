import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './elements/header';
import { Footer } from './elements/footer';
import { AppRouter } from './routes';

export const App: React.FC = () => {
  return (
      <>
      <Header/>
        <AppRouter/>
      <Footer/>
      </>
  );
}