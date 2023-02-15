import { useState } from "react";
import KanjiTableSelection from "../components/KanjiTableSelection";
import MeaningTable from "../components/MeaningTable";
import ROWS, { RENDER_TABLES } from "../components/ROWS";

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
      <KanjiTableSelection {...dataForTableSelection} />

      <div style={{ marginTop: 20 }}>
        <MeaningTable table={ROWS.find((x) => x.id === value.id)} />
      </div>
    </>
  );
}
