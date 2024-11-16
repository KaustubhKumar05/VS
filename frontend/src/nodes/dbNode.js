import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const DBNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      {...NodeRegistry.dbNode}
      handles={[
        {
          type: "target",
          id: "system",
          position: Position.Left,
          label: "Input",
        },
        {
          type: "source",
          id: "response",
          position: Position.Right,
          style: {},
          label: "Output",
        },
      ]}
      inputs={[
        {
          options: ["MongoDB", "MySQL", "PostgreSQL"],
          default: data.outputType || "MongoDB",
          label: "Type",
        },
      ]}
    />
  );
};
