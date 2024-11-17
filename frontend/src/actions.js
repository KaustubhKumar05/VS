import { ClearButton } from "./clear";
import { SubmitButton } from "./submit";

export const PipelineActions = () => (
  <div
    className="border-t border-blue-500"
    style={{ height: "calc(30vh - 95px)" }}
  >
    <p className="text-center font-semibold my-4">
      Drag and drop nodes to create a workflow
    </p>
    <div className="flex w-full justify-center flex-1 items-center gap-4">
      <ClearButton />
      <SubmitButton />
    </div>
  </div>
);
