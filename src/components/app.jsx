import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import YouTube from './youtube';

function Welcome(props) {
  return (
    <div className="container">
      <h1>Welcome to final project of Advanced Frontend Technologies!</h1>
      <h1>This page is for React Route implementation</h1>
      <h1>Go to YouTube page on navbar to search videos</h1>
    </div>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul id="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
      </ul>
    </nav>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<FallBack />} />
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
