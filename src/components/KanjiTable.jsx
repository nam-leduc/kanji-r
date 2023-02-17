import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { Kanji } from "./Kanji";

export default function KanjiTable({ table }) {
  if (!table) {
    return <></>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={{ xs: 5 }} spacing={2}>
        {table.cols.map((kanji) => (
          <Grid item xs={1} key={kanji.kanji}>
            <Kanji defaultCell={kanji}></Kanji>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
