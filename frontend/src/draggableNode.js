import { NodeMap, NodeRegistry } from "./nodes";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} border-2 bg-white border-${
        NodeRegistry[NodeMap[label]].theme
      }-500 px-4 py-2`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "75px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "center",
        flexDirection: "column",
      }}
      draggable
    >
      {NodeRegistry[NodeMap[label]].icon}
      <span className="font-semibold mt-1">{label}</span>
    </div>
  );
};
