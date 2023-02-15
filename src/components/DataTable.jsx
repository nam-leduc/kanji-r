import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import * as React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: 32,
}));

function Kanji({ defaultCell }) {
  const [cell, setCell] = React.useState(defaultCell);

  function toggleRemembered(cell) {
    setCell({
      ...cell,
      remembered: !cell.remembered,
    });
  }

  return (
    <>
      {cell.remembered && (
        <StyledButton
          variant="contained"
          color="success"
          onDoubleClick={() => toggleRemembered(cell)}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        >
          {cell.kanji}
        </StyledButton>
      )}

      {!cell.remembered && (
        <StyledButton
          variant="outlined"
          onDoubleClick={() => toggleRemembered(cell)}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        >
          {cell.kanji}
        </StyledButton>
      )}
    </>
  );
}

export default function DataTable({ table }) {
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
