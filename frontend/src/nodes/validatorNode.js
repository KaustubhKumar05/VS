// inputNode.js

import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";

export const ValidatorNode = ({ id, data }) => {
  return (
    <GenericNode
      {...NodeRegistry.validatorNode}
      id={id}
      handles={[
        {
          id: "value",
          type: "source",
          position: Position.Left,
          style: {top: `${100/3}%`},
          label: "Response",
        },
        {
          id: "value",
          type: "target",
          position: Position.Left,
          style: {top: `${200/3}%`},
          label: "Input",
        },
        {
          id: "value",
          type: "source",
          position: Position.Right,
          style: {},
          label: "Output",
        },
      ]}
      inputs={[
        {
          defaultValue: "Eval prompt goes here",
          onChangeCallback: () => {},
          label: "Name",
        },
      ]}
    />
  );
};
