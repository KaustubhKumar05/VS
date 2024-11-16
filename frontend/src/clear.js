import { Trash2Icon } from "lucide-react";
import { useStore } from "./store";

export const ClearButton = () => {
  const { setNodes } = useStore();
  return (
    <button
      className="flex w-28 justify-center items-center gap-2 font-semibold bg-red-500 hover:opacity-80 cursor-pointer rounded-md p-2 text-white"
      onClick={() => setNodes([])}
    >
      <Trash2Icon size={20} /> Clear
    </button>
  );
};
