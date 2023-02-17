import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Favorite } from "./Favorite";
import { openDialog } from "./kanjiDialogStateSlice";

export const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: 32,
}));

export function Kanji({ defaultCell }) {
  const dispatch = useDispatch();

  const [cell, setCell] = React.useState(defaultCell);

  function toggleValue() {
    dispatch(openDialog(cell));
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
