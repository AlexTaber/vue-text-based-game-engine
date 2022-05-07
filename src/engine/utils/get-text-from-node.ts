import { VNode } from "vue";

export function getTextFromNode(node: VNode): string | undefined {
  const content = node?.children;
  return typeof content === "string" ? content.trimStart() : undefined;
}
