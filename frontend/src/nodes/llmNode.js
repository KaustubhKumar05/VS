// llmNode.js

import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const LLMNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      {...NodeRegistry.llmNode}
      handles={[
        {
          type: "target",
          id: "system",
          position: Position.Left,
          style: { top: `${100 / 3}%` },
          label: "Input1",
        },
        {
          type: "target",
          id: "prompt",
          position: Position.Left,
          style: { top: `${200 / 3}%` },
          label: "Input2",
        },
        {
          type: "source",
          id: "response",
          position: Position.Right,
          style: {},
          label: "Output",
        },
      ]}
    >
      <p className="font-semibold">This is an LLM</p>
    </GenericNode>
  );
};
