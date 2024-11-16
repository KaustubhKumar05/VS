import { SendIcon } from "lucide-react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  return (
    <button
      onClick={() => {
        console.log({ nodes, edges });
      }}
      className="flex w-28 justify-center items-center gap-2 font-semibold bg-blue-500 hover:opacity-80 cursor-pointer rounded-md p-2 text-white"
      type="submit"
    >
      <SendIcon size={18} />
      Submit
    </button>
  );
};
