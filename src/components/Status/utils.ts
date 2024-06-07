import type { ChipProps } from "@mui/material";

export const ProjectStatus = {
  Active: "Active",
  Pending: "Pending",
  Compeleted: "Compeleted",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const ProjectStatusToChipColorMap: Record<
  ProjectStatus,
  ChipProps["color"]
> = {
  Active: "success",
  Pending: "warning",
  Compeleted: "info",
};

export const ProjectStatusToChipBackgroundMap: Record<ProjectStatus, string> = {
  Active: "#eefced",
  Pending: "#f7e9e1",
  Compeleted: "#d5e9f2",
};
