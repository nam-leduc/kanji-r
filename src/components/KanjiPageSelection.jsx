import { Autocomplete, TextField } from "@mui/material";
import * as React from "react";
import { RENDER_TABLES } from "./kanjis";

export default function KanjiPageSelection({
  value,
  setValue,
  inputValue,
  setInputValue,
}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={RENDER_TABLES}
      sx={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Bảng Kanji" />}
    />
  );
}
