import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const CacheNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      {...NodeRegistry.cacheNode}
      handles={[
        {
          type: "target",
          id: "system",
          position: Position.Left,
          style: { top: `${100 / 3}%` },
          label: "Input",
        },
        {
          type: "source",
          id: "system",
          position: Position.Left,
          style: { top: `${200 / 3}%` },
          label: "Response",
        },
        {
          type: "source",
          id: "response",
          position: Position.Right,
          style: {},
          label: "Forward",
        },
      ]}
    >
      <p className="font-semibold">Redis cache</p>
    </GenericNode>
  );
};
