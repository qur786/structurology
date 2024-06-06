import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
