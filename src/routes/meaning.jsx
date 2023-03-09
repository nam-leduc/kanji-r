import { Button, Divider, Stack } from "@mui/material";
import { useState } from "react";
import KanjiDialog from "../components/KanjiDialog";
import KanjiPageSelection from "../components/KanjiPageSelection";
import ROWS, { RENDER_TABLES } from "../components/kanjis";
import KanjiTable from "../components/KanjiTable";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Meaning() {
  const [value, setValue] = useState(RENDER_TABLES[0]);
  const [enableShuffle, setEnableShuffle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dataForTableSelection = {
    value,
    setValue,
    inputValue,
    setInputValue,
  };

  const toggleShuffle = function () {
    setEnableShuffle((value) => {
      return !value;
    });
  };

  let TableX = () => <p>Nothing</p>

  if (value) {
    let tableData = ROWS.find((x) => x.id === value.id);

    if (enableShuffle) {
      shuffleArray(tableData.cols);
    }

    TableX =  () => (
      <div style={{ marginTop: 20 }}>
        <KanjiTable table={tableData} />
      </div>
    )
  }

  return (
    <>
      <KanjiDialog />
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <KanjiPageSelection {...dataForTableSelection} />
        <Button variant="contained" color="success" onClick={toggleShuffle}>
          Ngẫu nhiên
        </Button>
      </Stack>

      <TableX />
    </>
  );
}
