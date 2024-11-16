import { RefreshCcwIcon, SendIcon, SplitIcon, XIcon } from "lucide-react";
import { useStore } from "./store";
import { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [submitting, setSubmitting] = useState();
  const [results, setResults] = useState(null);
  const modalRef = useRef();

  useOnClickOutside(modalRef, () => {
    setResults(null);
  });

  return (
    <>
      {results && (
        <div
          ref={modalRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-blue-50 rounded-md shadow-lg"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 text-white">
                Evaluation
              </h2>
              <button
                onClick={() => setResults(null)}
                className="text-black cursor-pointer hover:opacity-50"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="gap-2 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Number of nodes
                </span>
                <span className="px-3 py-1 bg-blue-800 text-blue-50 rounded-full text-sm font-semibold">
                  {results.num_nodes}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Number of connections
                </span>
                <span className="px-3 py-1 bg-blue-800 text-blue-50 rounded-full text-sm font-semibold">
                  {results.num_edges}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Workflow cyclicity
                </span>
                <span
                  className={`px-2 py-1 ${
                    results.is_dag
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  } rounded-full text-sm font-semibold flex items-center`}
                >
                  {results.is_dag ? (
                    <>
                      <SplitIcon size={18} />
                      Acyclic
                    </>
                  ) : (
                    <>
                      <RefreshCcwIcon size={18} />
                      Cyclic
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        disabled={submitting}
        onClick={async () => {
          setSubmitting(true);
          console.debug({ edges, nodes });
          try {
            const resp = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ nodes, edges }),
              }
            );
            const data = await resp.json();
            console.debug({ data });
            setResults(data);
          } catch (err) {
            console.error("Error submitting pipeline", err);
          }
          setSubmitting(false);
        }}
        className="flex w-28 justify-center items-center disabled:opacity-50 gap-2 font-semibold bg-blue-500 hover:opacity-80 cursor-pointer rounded-md p-2 text-white"
        type="submit"
      >
        <SendIcon size={18} />
        Submit
      </button>
    </>
  );
};
