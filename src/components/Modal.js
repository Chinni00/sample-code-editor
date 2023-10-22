import * as React from "react";
import styles from "./Modal.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  // State variables to manage the modal and input values
  const [isSaved, setIsSaved] = React.useState(false);
  const [isFileExist, setIsFileExist] = React.useState(false);
  const [isMsgShow, setIsMsgShown] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  // Function to open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the modal and reset the input values
  const handleClose = () => {
    setOpen(false);
    setFileName('');
    setIsFileExist(false);
  };

  // Function to handle the save button click
  const handleSave = () => {
    if (!fileName.trim()) {
      setIsMsgShown(true);
      setTimeout(() => {
        setIsMsgShown(false);
      }, 2000);
    } else if (localStorage.getItem(fileName)) {
      setIsFileExist(true);
    } else {
      setFileName("");
      props.onSendData(fileName);
      setIsFileExist(false);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
        setOpen(false);
      }, 1000);
    }
  };

  // Function to handle the overwrite button click
  const handleOverwrite = () => {
    setFileName("");
    props.onSendData(fileName);
    setIsFileExist(false);
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <div>
      <button
        variant="outlined"
        className={styles.btn}
        onClick={handleClickOpen}
      >
        Save
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>File Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ color: "red" }}>
              {isMsgShow && "File name should not be empty"}
            </p>
            To save to this file, please enter your file name here.
            <p style={{ color: "red" }}>
              {isFileExist && (
                <span>
                  {!isSaved && <p>File name already exists. Do you want to overwrite that file?</p>}
                  {!isSaved && (
                    <div className={styles.fileNameExitingChoiceBtn}>
                      <Button onClick={handleOverwrite}>Yes</Button>
                      <Button onClick={handleClose}>No</Button>
                    </div>
                  )}
                </span>
              )}
            </p>
            {isSaved && <h2>Saved Successfully..!</h2>}
          </DialogContentText>
          {!isSaved && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter File Name"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setFileName(e.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
