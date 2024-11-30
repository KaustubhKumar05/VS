import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const OutputNode = ({ id, data }) => {
  return (
    <GenericNode
      {...NodeRegistry.outputNode}
      id={id}
      handles={[
        {
          id: "value",
          type: "target",
          position: Position.Left,
          style: {},
          label: "Input",
        },
      ]}
      inputs={[
        {
          options: ["Text", "Image", "Video"],
          default: data.outputType || "Text",
          label: "Type",
        },
        {
          default:
            data?.outputName || id.replace("customOutput-", "output_") || "",
          onChangeCallback: () => {},
          label: "Name",
        },
      ]}
    />
  );
};
