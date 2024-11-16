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
