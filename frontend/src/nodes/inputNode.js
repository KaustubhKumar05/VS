import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const InputNode = ({ id, data }) => {
  return (
    <GenericNode
      {...NodeRegistry.inputNode}
      id={id}
      handles={[
        {
          id: "value",
          type: "source",
          position: Position.Right,
          style: {},
          label: "Source",
        },
      ]}
      inputs={[
        {
          defaultValue: data?.inputName || id.replace("customInput-", "input_"),
          onChangeCallback: () => {},
          label: "Name",
        },
        {
          options: ["Text", "File"],
          defaultValue: data.inputType || "Text",
          label: "Type",
        },
      ]}
    />
  );
};
