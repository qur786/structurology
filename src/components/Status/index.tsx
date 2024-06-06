import { Chip } from "@mui/material";
import {
  ProjectStatus,
  ProjectStatusToChipBackgroundMap,
  ProjectStatusToChipColorMap,
} from "./utils";

export function Status({ status }: { status: ProjectStatus }): JSX.Element {
  return (
    <Chip
      variant="outlined"
      color={ProjectStatusToChipColorMap[status]}
      size="small"
      label={status}
      sx={{
        backgroundColor: ProjectStatusToChipBackgroundMap[status],
        fontWeight: 700,
      }}
    />
  );
}
