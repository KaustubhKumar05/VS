import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const IntegrationNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      {...NodeRegistry.integrationNode}
      handles={[
        {
          type: "target",
          id: "system",
          position: Position.Bottom,
          label: "Link",
        },
      ]}
      inputs={[
        {
          options: ["Gmail", "Notion", "Jira"],
          default: data.outputType || "Gmail",
          label: "Type",
        },
      ]}
    />
  );
};
