import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const VisionNode = ({ id, data }) => {
  return (
    <GenericNode
      id={id}
      {...NodeRegistry.visionNode}
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
    >
      <p className="font-semibold">For OCR and multimodal tasks</p>
    </GenericNode>
  );
};
