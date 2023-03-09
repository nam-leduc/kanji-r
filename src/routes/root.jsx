import { Button, Chip, Container, Divider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Container maxWidth="md">
        <Button variant="contained">Ôn tập</Button>

        <Divider sx={{margin: "10px 0px"}}>
          <Chip label="Bảng chữ" />
        </Divider>

        <Outlet />
      </Container>
    </>
  );
}
