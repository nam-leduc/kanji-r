import { useState } from "react";
import KanjiPageSelection from "../components/KanjiPageSelection";
import ROWS, { RENDER_TABLES } from "../components/kanjis";
import KanjiTable from "../components/KanjiTable";

export default function Meaning() {
  const [value, setValue] = useState(RENDER_TABLES[0]);
  const [inputValue, setInputValue] = useState("");

  const dataForTableSelection = {
    value,
    setValue,
    inputValue,
    setInputValue,
  };

  return (
    <>
      <KanjiPageSelection {...dataForTableSelection} />

      <div style={{ marginTop: 20 }}>
        <KanjiTable table={ROWS.find((x) => x.id === value.id)} />
      </div>
    </>
  );
}
