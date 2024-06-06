import { ProjectStatus } from "../Status/utils";

export interface Project {
  projectName: string;
  createdDate: Date;
  status: ProjectStatus;
}

function createProjects(
  projectName: string,
  createdDate: Date,
  status: ProjectStatus,
) {
  return { projectName, status, createdDate };
}

export const PROJECTS = [
  createProjects(
    "24015-237 WHC - Delaware Ranch, TX - 46MW",
    new Date(2023, 1, 1),
    ProjectStatus.Active,
  ),
  createProjects(
    "24015-254 WHC - Green Mallard",
    new Date(2022, 4, 3),
    ProjectStatus.Pending,
  ),
  createProjects(
    "24015.145-WHC - hillsboro-1",
    new Date(2024, 6, 3),
    ProjectStatus.Compeleted,
  ),
  createProjects(
    "↓ McCarthy Demo",
    new Date(2022, 4, 3),
    ProjectStatus.Compeleted,
  ),
  createProjects(
    "↓ 24015.260 PCL-Case",
    new Date(2021, 3, 7),
    ProjectStatus.Compeleted,
  ),
];
