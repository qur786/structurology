import { ProjectStatus } from "../Status/utils";

export interface Project {
  id: string;
  projectName: string;
  createdDate: Date;
  status: ProjectStatus;
}

function createProjects({ id, projectName, createdDate, status }: Project) {
  return { id, projectName, status, createdDate };
}

export const PROJECTS = [
  createProjects({
    id: "1",
    projectName: "24015-237 WHC - Delaware Ranch, TX - 46MW",
    createdDate: new Date(2023, 1, 1),
    status: ProjectStatus.Active,
  }),
  createProjects({
    id: "2",
    projectName: "24015-254 WHC - Green Mallard",
    createdDate: new Date(2022, 4, 3),
    status: ProjectStatus.Pending,
  }),
  createProjects({
    id: "3",
    projectName: "24015.145-WHC - hillsboro-1",
    createdDate: new Date(2024, 6, 3),
    status: ProjectStatus.Compeleted,
  }),
  createProjects({
    id: "4",
    projectName: "↓ McCarthy Demo",
    createdDate: new Date(2022, 4, 3),
    status: ProjectStatus.Compeleted,
  }),
  createProjects({
    id: "5",
    projectName: "↓ 24015.260 PCL-Case",
    createdDate: new Date(2021, 3, 7),
    status: ProjectStatus.Compeleted,
  }),
];
