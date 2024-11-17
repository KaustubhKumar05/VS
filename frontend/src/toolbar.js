import { DraggableNode } from "./draggableNode";
import { NodeRegistry } from "./nodes";
import { nodeTypes } from "./ui";

export const PipelineToolbar = () => {
  return (
    <div className="px-2 border-b border-blue-400">
      <div className="py-2 flex w-full items-center justify-center gap-3 overflow-x-auto">
        {Object.keys(nodeTypes).map((nodeType) => (
          <DraggableNode
            key={nodeType}
            type={nodeType}
            label={NodeRegistry[nodeType].title}
          />
        ))}
      </div>
    </div>
  );
};
