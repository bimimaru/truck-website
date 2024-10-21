import React from 'react';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Card } from './components/Card/Card';
import './App.css';
import { CardButton } from './components/Card/CardButton/CardButton';

export default function App() {
  return (
    <div>
      <Header />
      <Body />
    </div >
  );
}