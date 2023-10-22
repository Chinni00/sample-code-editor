import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to navigate to the home page
  const homeHandler = () => {
    navigate('/');
  }

  // Function to navigate to the saved files page
  const savedFilesHandler = () => {
    navigate('/saved');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>CODE EDITOR</div> {/* Displays a logo or app name */}
      <ul className={styles.navbarMenu}>
        <li onClick={homeHandler}>Editor</li> {/* Menu item to navigate to the editor */}
        <li onClick={savedFilesHandler}>Saved Files</li> {/* Menu item to navigate to saved files */}
      </ul>
    </div>
  );
}

export default Navbar;
