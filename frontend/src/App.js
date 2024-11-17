import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { PipelineActions } from "./actions";

function App() {
  return (
    <div className="bg-blue-50 h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <PipelineActions />
    </div>
  );
}

export default App;
