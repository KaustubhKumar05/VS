import { Handle, Position } from "reactflow";
import { XIcon, HexagonIcon } from "lucide-react";
import { Input } from "./components/Input";
import { useStore } from "../store";

const getHandleLabelClasses = (position) => {
  switch (position) {
    case Position.Left:
      return "-translate-x-full -left-2";
    case Position.Right:
      return "translate-x-1/3";
    case Position.Top:
      return "-top-4 -translate-x-1/2";
    case Position.Bottom:
      return "top-4 -translate-x-1/2";
    default:
      return "";
  }
};
export const GenericNode = ({
  title,
  icon = <HexagonIcon />,
  id,
  data,
  // id, type, position, style
  handles = [],
  inputs = [],
  children,
  theme = "",
}) => {
  const { removeNode, removeEdgesWithNode } = useStore();
  return (
    <div
      className={`min-w-52 min-h-20 flex flex-col rounded-md bg-${theme}-200/75 overflow-hidden`}
    >
      <div
        className={`flex items-center w-full gap-2 bg-${theme}-500 text-white p-1 px-2`}
      >
        {icon}
        <p className={`text-lg font-bold text-white`}>{title}</p>
        <XIcon
          size={18}
          className="ml-auto text-white cursor-pointer hover:opacity-50"
          onClick={() => {
            removeNode(id);
            removeEdgesWithNode(id);
          }}
        />
      </div>
      <div
        className={`p-4 flex flex-col gap-2 border-2 border-${theme}-500 rounded-b-md`}
      >
        {handles.map((handle) => (
          <Handle
            title={handle.id}
            type={handle.type}
            position={handle.position}
            style={handle.style}
            id={`${id}-${handle.id}`}
            key={`${handle.id}-${handle.label}`}
            className="p-1 relative"
          >
            <p
              className={`absolute -top-2 text-sm font-semibold ${getHandleLabelClasses(
                handle.position
              )}`}
            >
              {handle.label}
            </p>
          </Handle>
        ))}
        {inputs.map((input) => (
          <Input key={input.label + `${id}`} {...input} />
        ))}
        <div className="my-2">{children}</div>
      </div>
    </div>
  );
};
