import { useCallback, useEffect, useRef, useState } from "react";
import { Position } from "reactflow";
import { GenericNode } from "./genericNode";
import { NodeRegistry } from ".";
import { isValidVariableName } from "../utils";

const MIN_HEIGHT = 32;

const defaultHandle = {
  type: "target",
  position: Position.Left,
};

export const TextNode = ({ id, data }) => {
  const [contents, setContents] = useState(
    "Enter {{variables}} with valid names here"
  );
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  const renderParsedInput = useCallback((input) => {
    const parts = input.split(/(\{\{.*?\}\})/);
    return parts.map((part, index) => {
      if (part.startsWith("{{") && part.endsWith("}}")) {
        const potentialVariable = part.slice(2, -2).trim();
        const isValid = isValidVariableName(potentialVariable);
        return (
          <span
            key={index}
            className={`rounded ${
              isValid
                ? "bg-green-200/50 text-green-800"
                : "bg-red-200/50 text-red-800"
            }`}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  }, []);

  useEffect(() => {
    const parts = contents.split(/(\{\{.*?\}\})/);
    const updatedVarList = parts
      .filter((part) => part.startsWith("{{") && part.endsWith("}}"))
      .map((part) => part.slice(2, -2).trim())
      .filter(isValidVariableName);

    const uniqueVars = Array.from(new Set(updatedVarList));
    const varCount = uniqueVars.length;

    const updatedHandles = uniqueVars.map((v, index) => ({
      ...defaultHandle,
      id: `var-${v}`,
      style: { top: `${((index + 1) * 100) / (varCount + 1)}%` },
      label: v,
    }));

    setHandles([
      {
        id: "output",
        type: "target",
        position: Position.Right,
        style: {},
        label: "Output",
      },
      ...updatedHandles,
    ]);
  }, [contents]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${MIN_HEIGHT}px`;
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.max(
        MIN_HEIGHT,
        scrollHeight
      )}px`;
    }
  }, [contents]);

  return (
    <GenericNode {...NodeRegistry.textNode} id={id} handles={handles}>
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          className={`w-full px-3 py-2 h-auto text-transparent caret-black bg-white border border-${NodeRegistry.textNode.theme}-300 rounded-md shadow-sm resize-none`}
          placeholder="Enter {{variables}} here"
        />
        <div className="absolute inset-0 pointer-events-none whitespace-pre-wrap break-words overflow-hidden px-3 py-2">
          {renderParsedInput(contents)}
        </div>
      </div>
    </GenericNode>
  );
};
