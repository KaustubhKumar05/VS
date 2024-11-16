import {
  BinaryIcon,
  BrainIcon,
  DatabaseIcon,
  DatabaseZapIcon,
  PenIcon,
  PrinterIcon,
  ScanEyeIcon,
  TextIcon,
  WebhookIcon,
} from "lucide-react";

const NodeRegistry = {
  inputNode: { title: "Input", theme: "blue", icon: <PenIcon size="20" /> },
  llmNode: { title: "LLM", theme: "purple", icon: <BrainIcon size="20" /> },
  textNode: { title: "Text", theme: "emerald", icon: <TextIcon size="20" /> },
  outputNode: {
    title: "Output",
    theme: "orange",
    icon: <PrinterIcon size="20" />,
  },
  dbNode: {
    title: "Database",
    theme: "zinc",
    icon: <DatabaseIcon size="20" />,
  },
  cacheNode: {
    title: "Cache",
    theme: "red",
    icon: <DatabaseZapIcon size="20" />,
  },
  integrationNode: {
    title: "Integration",
    theme: "pink",
    icon: <WebhookIcon size="20" />,
  },
  visionNode: {
    title: "Vision",
    theme: "slate",
    icon: <ScanEyeIcon size="20" />,
  },
  validatorNode: {
    title: "Validator",
    theme: "red",
    icon: <BinaryIcon size="20" />,
  },
};

const NodeMap = {};
Object.keys(NodeRegistry).forEach((node) => {
  NodeMap[NodeRegistry[node].title] = node;
});

export { NodeRegistry, NodeMap };

// bg-orange-200/75
// border-orange-200
// border-orange-500
// bg-orange-500
// bg-pink-200/75
// bg-red-200/75
// bg-slate-200/75
// bg-zinc-200/75
// bg-emerald-200/75
// bg-purple-200/75
// bg-blue-200/75
// border-pink-200
// border-pink-500
// border-red-200
// border-red-500
// border-slate-200
// border-slate-500
// border-zinc-200
// border-zinc-500
// border-emerald-200
// border-emerald-500
// border-purple-200
// border-purple-500
// border-blue-200
// border-blue-500
// bg-pink-500
// bg-red-500
// bg-slate-500
// bg-zinc-500
// bg-emerald-500
// bg-purple-500
// bg-blue-500
