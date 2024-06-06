import { PlayArrow, MoreVert, Search } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import { PROJECTS } from "./utils";
import { Status } from "../Status";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProjectTable() {
  const [data, setData] = useState(PROJECTS); // In real life scenario this would be fetched from an API within useEffect and then setted to the state.
  const [search, setSearch] = useState("");
  const handleSearchChange: TextFieldProps["onChange"] = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  useEffect(() => {
    const searchRegex = new RegExp(search, "i");
    setData(() => {
      const filteredData = PROJECTS.filter(
        (ele) =>
          searchRegex.test(ele.createdDate.toISOString()) ||
          searchRegex.test(ele.projectName) ||
          searchRegex.test(ele.projectName),
      );
      return filteredData;
    });
  }, [search]);

  return (
    <TableContainer sx={{ minWidth: 650, maxHeight: 400 }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="caption">Project Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="caption">Created Date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="caption">Status</Typography>
            </TableCell>
            <TableCell align="center">
              <TextField
                color="primary"
                size="small"
                onChange={handleSearchChange}
                value={search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((project) => (
            <TableRow
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                ":hover": { backdropFilter: "brightness(95%)" },
              }}
              key={project.projectName}
            >
              <TableCell component="th" scope="row">
                <Typography variant="body1" fontWeight={700}>
                  {project.projectName}
                </Typography>
              </TableCell>
              <TableCell align="center">
                {project.createdDate.toISOString().split("T")[0]}
              </TableCell>
              <TableCell align="center">
                <Status status={project.status} />
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PlayArrow />}
                >
                  Run
                </Button>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
