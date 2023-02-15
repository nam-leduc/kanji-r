import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import * as React from "react";
import MEANING from "./MEANING";

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: 32,
}));

function Favorite({ favorite, toggleRemembered }) {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleRemembered();
      }}
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      style={{
        position: "absolute",
        right: "0px",
        top: "-6px",
        fontSize: "25px",
        padding: "0px",
        border: "0px",
        background: "none",
        color: "green",
      }}
    >
      {favorite ? "★" : "☆"}
    </a>
  );
}

function Kanji({ defaultCell }) {
  const [cell, setCell] = React.useState(defaultCell);

  function toggleValue() {
    setCell((cell) => {
      if (cell.value === cell.meaning) {
        return {
          ...cell,
          value: cell.kanji,
        };
      } else {
        return {
          ...cell,
          value: cell.meaning,
        };
      }
    });
  }

  function toggleRemembered() {
    setCell({
      ...cell,
      remembered: !cell.remembered,
    });
  }

  return (
    <>
      <StyledButton
        variant="outlined"
        disableTouchRipple={true}
        disableFocusRipple={true}
        disableRipple={true}
        sx={{ fontSize: cell.value === cell.kanji ? 32 : 10 }}
        onClick={() => toggleValue()}
      >
        {cell.value}
        <Favorite
          favorite={cell.remembered}
          toggleRemembered={toggleRemembered}
        />
      </StyledButton>
    </>
  );
}

export default function MeaningTable({ table }) {
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
