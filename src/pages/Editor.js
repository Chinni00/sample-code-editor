import { useState, useRef } from 'react';
import styles from './Editor.module.css';
import FormDialog from '../components/Modal';

const Editor = () => {
  // State variable to manage the editor's disable/enable state
  const [isDisabled, setIsDisabled] = useState(false);

  // Ref to the textarea element to access its value
  const enteredTextRef = useRef();

  // Function to toggle the disable/enable state of the editor
  const disableHandler = () => {
    setIsDisabled(!isDisabled);
  }

  // Function to copy the content of the textarea to the clipboard
  const copyHandler = async () => {
    try {
      let inputText = enteredTextRef.current.value;
      await window.navigator.clipboard.writeText(inputText);
      alert('Text copied successfully');
    } catch (err) {
      alert(err.message);
    }
  }

  // Function to handle the file name from the modal and save the content to local storage
  const handleFileName = (fileName) => {
    let msg = enteredTextRef.current.value;
    localStorage.setItem(fileName, JSON.stringify(msg));
  }

  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <textarea
          cols='150'
          rows='26'
          placeholder='Write your code here...'
          ref={enteredTextRef}
          disabled={isDisabled}
        ></textarea>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={copyHandler}>
          Copy
        </button>
        <FormDialog onSendData={handleFileName} />
        <button className={styles.btn} onClick={disableHandler}>
          {isDisabled ? "Unlock" : "Lock"}
        </button>
      </div>
    </div>
  );
}

export default Editor;
