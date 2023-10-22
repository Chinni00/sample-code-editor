import React, { useEffect, useState } from "react";
import styles from "./SavedFiles.module.css";
import Navbar from "./Navbar";

const SavedFiles = () => {
  // State variables for managing files and the selected file's content
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');

  // Function to handle file selection and display its content
  const selectorHandle = (fileName) => {
    const filteredFile = files.find(item => item.name === fileName);
    setSelectedFile(filteredFile ? filteredFile.content : '');
  }

  // Function to extract saved files from local storage
  const extractSavedFiles = () => {
    const files = [];
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      const file = { name: key, content: value };
      files.push(file);
    }
    return files;
  };

  // Use useEffect to populate the files state when the component mounts
  useEffect(() => {
    const localFiles = extractSavedFiles();
    setFiles(localFiles);
  }, []);

  return (
    <div>
      <Navbar /> {/* Renders the navigation bar component */}
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.listContainer}>
            {files.map((file) => (
              <li className={styles.listItem} onClick={() => selectorHandle(file.name)}>
                <p>{file.name}</p> {/* Display the name of each saved file */}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
         <textarea value={selectedFile ? selectedFile : 'no data to display'} disabled></textarea>
           {/* Display the content of the selected file */}
        </div>
      </div>
    </div>
  );
};

export default SavedFiles;
