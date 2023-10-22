import React from 'react';
import Navbar from './Navbar';
import Editor from './Editor';

const Home = () => {
  return (
    <div>
      <Navbar />  {/* Renders the Navbar component, presumably for navigation or top-level UI */}
      <Editor />  {/* Renders the Editor component, likely for editing code or text */}
    </div>
  );
}

export default Home;
