import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify'
import { render } from 'react-dom';
import Table from './table.js'
import Chart from './chart.js'
import Navbar from './navbar.js'




function App() {
  return (
    <>
    < Navbar />
    <div className='container-fluid'>
      <div className='row'>
        < Table />
        < Chart />
      </div>
    </div>
    </>
  );
}

export default App;

