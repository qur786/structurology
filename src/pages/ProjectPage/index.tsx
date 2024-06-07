import { useParams } from "react-router-dom";
import { PROJECTS } from "../../components/ProjectTable/utils";

export function ProjectPage(): JSX.Element {
  const { id: userID } = useParams<{ id: string }>();
  return <div>{JSON.stringify(PROJECTS.find(({ id }) => id === userID))}</div>;
}
