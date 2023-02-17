import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog, dialogData, isDialogOpen } from "./kanjiDialogStateSlice";

export default function KanjiDialog() {
  const open = useSelector(isDialogOpen);
  const data = useSelector(dialogData);
  const dispatch = useDispatch();

  if (Object.keys(data).length === 0) {
    return <></>;
  }

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Kanji {data.kanji}</DialogTitle>
        <DialogContent>
          <p>{data.kanji}</p>
          <p>{data.meaning}</p>
          <ul>
            {data.examples.map((kanji) => (
              <li key={kanji}>{kanji}</li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
