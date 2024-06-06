import { Button, Paper, Stack, Typography } from "@mui/material";
import { ProjectTable } from "../../components/ProjectTable";

export function ProjectsPage(): JSX.Element {
  return (
    <Stack spacing={2}>
      <Typography variant="caption">Projects</Typography>
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography variant="body1" fontWeight={700}>
          Projects
        </Typography>
        <Button variant="text">+ Create New</Button>
      </Paper>
      <ProjectTable />
    </Stack>
  );
}
