import { useState } from "react";
import DataTable from "../components/DataTable";
import KanjiTableSelection from "../components/KanjiTableSelection";
import ROWS, { RENDER_TABLES } from "../components/ROWS";

export default function Index() {
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
        <DataTable table={ROWS.find((x) => x.id === value.id)} />
      </div>
    </>
  );
}
