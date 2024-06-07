import { Button, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../components/ProjectTable/utils";
import {
  ArrowBackIos,
  EditOutlined,
  PlayArrow,
  Save,
} from "@mui/icons-material";

export function ProjectPage(): JSX.Element {
  const { id } = useParams();

  const selectedProject = useMemo(() => {
    return PROJECTS.find((ele) => ele.id === id);
  }, [id]);
  return (
    <Grid container>
      <Grid container item alignItems="center">
        <Grid container item xs={8} gap={1} alignItems="center">
          <ArrowBackIos color="disabled" fontSize="small" />
          <Typography variant="h6">{selectedProject?.projectName}</Typography>
          <EditOutlined />
        </Grid>
        <Grid container item xs={4} justifyContent="space-evenly">
          <Button variant="outlined" size="small" startIcon={<Save />}>
            Draft
          </Button>
          <Button variant="outlined" size="small" startIcon={<Save />}>
            Save
          </Button>
          <Button variant="contained" size="small" startIcon={<PlayArrow />}>
            Run
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
