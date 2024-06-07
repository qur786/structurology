import {
  Button,
  Grid,
  Typography,
  Box,
  Tab,
  IconButton,
  IconButtonProps,
  ButtonProps,
} from "@mui/material";
import { TabContext, TabList, TabListProps, TabPanel } from "@mui/lab";
import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../components/ProjectTable/utils";
import {
  ArrowBackIos,
  EditOutlined,
  PlayArrow,
  Save,
} from "@mui/icons-material";
import { InputForm } from "../../components/InputForm";

export function ProjectPage(): JSX.Element {
  const [tab, setTab] = useState("input");
  const [readOnly, setReadOnly] = useState(true);
  const InputFormRef = useRef<{ submit: () => Promise<void> }>(null);
  const { id } = useParams();

  const handleTabChange: TabListProps["onChange"] = (_event, newValue) => {
    setTab(newValue);
  };

  const handleFormReadonly: IconButtonProps["onClick"] = () => {
    setReadOnly((prev) => !prev);
  };

  const handleSaveClick: ButtonProps["onClick"] = () => {
    InputFormRef.current?.submit();
  };

  const selectedProject = useMemo(() => {
    return PROJECTS.find((ele) => ele.id === id);
  }, [id]);

  return (
    <Grid container>
      <Grid container item alignItems="center">
        <Grid container item xs={8} gap={1} alignItems="center">
          <Link to="/">
            <ArrowBackIos color="disabled" fontSize="small" />
          </Link>
          <Typography variant="h6">{selectedProject?.projectName}</Typography>
          <IconButton onClick={handleFormReadonly}>
            <EditOutlined />
          </IconButton>
        </Grid>
        <Grid container item xs={4} justifyContent="space-evenly">
          <Button variant="outlined" size="small" startIcon={<Save />}>
            Draft
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Save />}
            onClick={handleSaveClick}
          >
            Save
          </Button>
          <Button variant="contained" size="small" startIcon={<PlayArrow />}>
            Run
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabChange} textColor="inherit">
              <Tab label="Details" value="details" />
              <Tab label="Settings" value="settings" />
              <Tab label="Input" value="input" />
            </TabList>
          </Box>
          <TabPanel value="details">Coming Soon...</TabPanel>
          <TabPanel value="settings">Coming Soon...</TabPanel>
          <TabPanel value="input">
            <InputForm readOnly={readOnly} ref={InputFormRef} />
          </TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
}
