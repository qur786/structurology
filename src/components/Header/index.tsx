import { AppBar, Toolbar, Typography } from "@mui/material";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6">Spile+</Typography>
      </Toolbar>
    </AppBar>
  );
}
