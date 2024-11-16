import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { ClearButton } from "./clear";

function App() {
  return (
    <div className="bg-blue-50 h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <div
        className="border-t border-blue-500"
        style={{ height: "calc(30vh - 95px)" }}
      >
        <p className="text-center font-semibold my-4">Drag and drop nodes to create a workflow</p>
        <div className="flex w-full justify-center flex-1 items-center gap-4">
          <ClearButton />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;

/**
 * Todo:
 * - BE Fix
 */
